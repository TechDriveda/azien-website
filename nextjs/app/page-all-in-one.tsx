import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
        flex min-h-screen flex-col
        bg-[#0b0f16]
        bg-[url('/Azien-Luxury-Club-P1.png')]
        bg-cover bg-center bg-no-repeat
        text-white
      "
    >
      {/* Header / Nav bar */}
      <header className="h-16 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          {/* Left: logo + name */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Azien logo"
              width={32}
              height={32}
            />
            <span className="text-sm font-medium">Azien Luxury Club</span>
          </div>

          {/* Center: nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#" className="text-white font-semibold">
              Home
            </Link>
            <Link href="#" className="text-white/80 hover:text-white">
              Fleet
            </Link>
            <Link href="#" className="text-white/80 hover:text-white">
              Membership Form
            </Link>
            <Link href="#" className="text-white/80 hover:text-white">
              Profit Calculator Form
            </Link>
            <Link href="#" className="text-white/80 hover:text-white">
              Contact
            </Link>
          </nav>

          {/* Right: Join button */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500"
            >
              Join Now
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <main className="flex min-h-[calc(100vh-4rem)] items-center">
        <section
          className="
            flex w-full max-w-4xl flex-col
            items-center gap-6
            sm:items-start sm:text-left
            px-8 py-16
            sm:ml-20 lg:ml-32
          "
        >
          <Image
            className="mb-2"
            src="/logo.png"
            alt="Azien logo"
            width={80}
            height={80}
            priority
          />

          <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg text-center sm:text-left">
            Welcome to Azien Luxury Club
          </h1>

          <h3 className="text-xl font-normal text-white drop-shadow-md text-center sm:text-left">
            Luxury vehicles • Concierge • Membership
          </h3>
        </section>
      </main>
    </div>
  );
}
