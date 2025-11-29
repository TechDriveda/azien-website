import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="h-16 bg-black/40 backdrop-blur-sm w-full">
            <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Azien logo"
                        width={32}
                        height={32}
                    />
                    <span className="text-sm font-medium text-white">
                        Azien Luxury Club
                    </span>
                </div>

                <Navigation />

            </div>
        </header>
    );
}
