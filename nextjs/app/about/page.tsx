import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <div
            className="flex min-h-screen flex-col bg-[#0b0f16] bg-[url('/Azien-Luxury-Club-P1.png')] bg-cover bg-center bg-no-repeat text-white">
            <Header />

            <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
                <div className="w-full max-w-3xl rounded-2xl bg-white/90 p-8 text-black shadow-xl">
                    <h1 className="mb-4 text-center text-3xl font-bold">
                        About Azien Luxury Club
                    </h1>

                    <p className="mb-4 text-lg">
                        Azien Luxury Club is a members-only concierge and vehicle access
                        program designed for clients who expect more than standard car
                        hire. Our goal is to make premium vehicles, curated experiences and
                        trusted service available in a simple, transparent way.
                    </p>

                    <p className="mb-4">
                        Whether you are an <span className="font-semibold">Access Member</span>
                        who wants to rent high-end vehicles, an{" "}
                        <span className="font-semibold">Asset Owner</span> providing cars to
                        the network, or a <span className="font-semibold">Dealer</span> looking
                        to maximise utilisation, Azien brings all parties together on one
                        platform with clear revenue-sharing and professional management.
                    </p>

                    <p className="mb-4">
                        Our membership tiers are designed to suit different levels of usage
                        and involvement, from occasional luxury drives to fully managed
                        fleets. Members benefit from structured pricing, profit calculators,
                        and transparent agreements, so you always know how your asset or
                        membership is performing.
                    </p>

                    <p>
                        Azien Luxury Club is built on three core principles:{" "}
                        <span className="font-semibold">trust, simplicity and value</span>.
                        We combine premium vehicles, careful screening and professional
                        operations to deliver a reliable, high-end experience for both
                        drivers and asset owners.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

