import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="hidden md:flex items-center gap-6 text-sm">

            <Link href="/" className="text-white font-semibold">Home</Link>

            <Link href="/about" className="text-white/80 hover:text-white">About Us</Link>

            <Link href="/gallery" className="text-white/80 hover:text-white">Gallery</Link>

            <Link href="/fleet" className="text-white/80 hover:text-white">Fleet</Link>

            <Link href="/membership" className="text-white/80 hover:text-white">Membership</Link>

            <Link href="/calculator" className="text-white/80 hover:text-white">Profit Calculator</Link>

            <Link href="/contact" className="text-white/80 hover:text-white">Contact</Link>

            {/* Join Button */}
            <Link
                href="/join"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500"
            >
                Join Now
            </Link>

        </nav>
    );
}
