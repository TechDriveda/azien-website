import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
        flex min-h-screen items-center justify-center
        bg-[#0b0f16]
        bg-[url('/Azien-Luxury-Club-P1.png')]
        bg-cover bg-center bg-no-repeat
        text-white
      "
    >
      <main
        className="
          flex w-full max-w-4xl flex-col
          items-center gap-6
          sm:items-start sm:text-left
          px-8 py-16
          sm:ml-20 lg:ml-32
        "
      >
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Azien logo"
          width={100}
          height={20}
          priority
        />

        <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg text-center sm:text-left">
          Welcome to Azien Luxury Club
        </h1>

        <h3 className="text-xl font-normal text-white drop-shadow-md text-center sm:text-left">
          Luxury vehicles • Concierge • Membership
        </h3>
      </main>
    </div>
  );
}

