import Image from "next/image";

export default function HeroSection() {
    return (
        <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
            <section className="flex w-full max-w-4xl flex-col items-center gap-6 px-8 py-16 text-center">
                <Image
                    className="mb-2"
                    src="/logo.png"
                    alt="Azien logo"
                    width={80}
                    height={80}
                    priority
                />

                <h1 className="text-5xl font-bold tracking-tight drop-shadow-lg">
                    Welcome to Azien Luxury Club
                </h1>

                <h3 className="text-xl font-normal drop-shadow-md">
                    Luxury vehicles • Concierge • Membership
                </h3>
            </section>
        </main>
    );
}
