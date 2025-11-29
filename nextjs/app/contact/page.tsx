import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
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
            <Header />

            <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
                <div className="w-full max-w-lg rounded-2xl bg-white/90 p-8 text-black shadow-xl">

                    <h1 className="mb-6 text-center text-3xl font-bold">
                        Contact Azien Luxury Club
                    </h1>

                    <p className="mb-4 text-lg text-center">
                        We’re here to assist with membership, fleet, bookings or general enquiries.
                    </p>

                    <div className="space-y-4 text-center">

                        {/* Phone Number */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
                            <p className="text-lg mt-1">1800 000 000</p>
                        </div>

                        {/* Email */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Email</h2>
                            <p className="text-lg mt-1">azien@example.com</p>
                        </div>

                        {/* Optional: Address */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Head Office</h2>
                            <p className="mt-1">Lagos, Nigeria</p>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
