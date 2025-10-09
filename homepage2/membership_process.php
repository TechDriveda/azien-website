<?php
// membership-process.php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  exit('Method Not Allowed');
}

require __DIR__ . '/config.php'; // provides $pdo (PDO to azien_db)

function t(string $s): string { return trim($s); }

$firstname  = t($_POST['firstName']  ?? '');
$lastname   = t($_POST['lastName']   ?? '');
$email      = t($_POST['email']      ?? '');
$phone      = t($_POST['phone']      ?? '');
$memberType = t($_POST['memberType'] ?? ''); // access | asset_owner | dealer
$memberTier = t($_POST['memberTier'] ?? ''); // basic | plus | premium

$errors = [];

// Server-side validation (mirrors your HTML patterns)
if ($firstname === '' || !preg_match("/^[A-Za-z][A-Za-z\s'\-]{1,99}$/", $firstname)) {
  $errors[] = 'First name is invalid.';
}
if ($lastname === '' || !preg_match("/^[A-Za-z][A-Za-z\s'\-]{1,99}$/", $lastname)) {
  $errors[] = 'Last name is invalid.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $errors[] = 'Email is invalid.';
}

// Your HTML says required for phone; DB allows NULL—keep required here:
if ($phone === '' || !preg_match("/^[0-9\+\(\)\-\.\s]{5,39}$/", $phone)) {
  $errors[] = 'Phone format is invalid.';
}

$allowedTypes = ['access','asset_owner','dealer'];
$allowedTiers = ['basic','plus','premium'];
if (!in_array($memberType, $allowedTypes, true))  $errors[] = 'Invalid membership type.';
if (!in_array($memberTier, $allowedTiers, true))  $errors[] = 'Invalid membership tier.';

if ($errors) {
  http_response_code(400);
  header('Content-Type: text/html; charset=utf-8');
  echo "<!doctype html><html><head><meta charset='utf-8'><title>Form Error</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' rel='stylesheet'>
        </head><body class='p-4'><div class='container'>
        <div class='alert alert-danger'><h4 class='alert-heading'>Please fix the following</h4><ul>";
  foreach ($errors as $e) echo "<li>".htmlspecialchars($e, ENT_QUOTES, 'UTF-8')."</li>";
  echo "</ul></div><a class='btn btn-secondary' href='membershipform.html'>&larr; Back</a></div></body></html>";
  exit;
}

// Map selects to flags (0/1)
$access = $asset_owner = $dealer = 0;
switch ($memberType) {
  case 'access':      $access = 1; break;
  case 'asset_owner': $asset_owner = 1; break;
  case 'dealer':      $dealer = 1; break;
}

$basic = $plus = $premium = 0;
switch ($memberTier) {
  case 'basic':   $basic = 1; break;
  case 'plus':    $plus = 1; break;
  case 'premium': $premium = 1; break;
}

// Insert
try {
  $stmt = $pdo->prepare("
    INSERT INTO membership
      (firstname, lastname, email, phone,
       access, asset_owner, dealer,
       basic, plus, premium)
    VALUES
      (:firstname, :lastname, :email, :phone,
       :access, :asset_owner, :dealer,
       :basic, :plus, :premium)
  ");

  $stmt->execute([
    ':firstname'    => $firstname,
    ':lastname'     => $lastname,
    ':email'        => $email,
    ':phone'        => $phone, // keep as string; HTML enforces required
    ':access'       => $access,
    ':asset_owner'  => $asset_owner,
    ':dealer'       => $dealer,
    ':basic'        => $basic,
    ':plus'         => $plus,
    ':premium'      => $premium,
  ]);

  $newId = (int)$pdo->lastInsertId();

  // Success page (you can redirect instead)
  header('Content-Type: text/html; charset=utf-8');
  echo "<!doctype html><html><head><meta charset='utf-8'><title>Membership Created</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' rel='stylesheet'>
        </head><body class='p-4'><div class='container'>
        <div class='alert alert-success'>
          <h4 class='alert-heading'>Success</h4>
          <p>Your membership has been created.</p>
          <hr>
          <p class='mb-0'><strong>Membership #:</strong> {$newId}</p>
        </div>
        <a class='btn btn-primary' href='membershipform.html'>Add another</a>
        </div></body></html>";

} catch (PDOException $e) {
  if ($e->getCode() === '23000') { // duplicate email (UNIQUE)
    http_response_code(409);
    exit('This email is already registered.');
  }
  http_response_code(500);
  exit('Server error. Please try again later.');
}
