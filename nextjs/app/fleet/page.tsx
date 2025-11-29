import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FleetPage() {
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

            <main className="flex min-h-[calc(100vh-4rem)] items-start justify-center px-6 py-16">
                <div className="w-full max-w-6xl rounded-2xl bg-white/90 p-8 text-black shadow-xl">

                    <h1 className="mb-2 text-center text-3xl font-bold">
                        Our Luxury Fleet
                    </h1>

                    <p className="mb-8 text-center text-lg">
                        Discover a selection of premium vehicles available for rent through
                        the Azien Luxury Club. All vehicles are professionally maintained,
                        performance-verified and ready for your next journey.
                    </p>

                    {/* GRID OF CARS */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {/* Mercedes-AMG G63 */}
                        <div className="overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition">
                            <img
                                src="/cars/g63.jpg"
                                alt="Mercedes-AMG G63"
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Mercedes-AMG G63</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Iconic luxury SUV with powerful V8 performance.
                                </p>
                            </div>
                        </div>

                        {/* Range Rover Autobiography */}
                        <div className="overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition">
                            <img
                                src="/cars/range-rover.jpg"
                                alt="Range Rover Autobiography"
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Range Rover Autobiography</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Ultimate comfort and refinement for premium travel.
                                </p>
                            </div>
                        </div>

                        {/* BMW X7 */}
                        <div className="overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition">
                            <img
                                src="/cars/bmw-x7.jpg"
                                alt="BMW X7 M50i"
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">BMW X7 M50i</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    7-seat luxury SUV with M-performance engineering.
                                </p>
                            </div>
                        </div>

                        {/* Toyota Land Cruiser 300 GR Sport */}
                        <div className="overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition">
                            <img
                                src="/cars/lc300.jpg"
                                alt="Toyota Land Cruiser 300 GR Sport"
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Land Cruiser 300 GR Sport</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Luxury off-road capability with exceptional durability.
                                </p>
                            </div>
                        </div>

                        {/* Lexus LX570 */}
                        <div className="overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition">
                            <img
                                src="/cars/lx570.jpg"
                                alt="Lexus LX570"
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Lexus LX570</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Premium comfort paired with legendary reliability.
                                </p>
                            </div>
                        </div>

                        {/* Mercedes-Benz S-Class */}
                        <div className="overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition">
                            <img
                                src="/cars/sclass.jpg"
                                alt="Mercedes-Benz S-Class"
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Mercedes-Benz S-Class</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Executive sedan with unmatched refinement and technology.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
