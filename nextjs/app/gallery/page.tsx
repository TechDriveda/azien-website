import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function GalleryPage() {
    // Add your 8 gallery image paths here
    const images = [
        "/gallery/Azien-Luxury-Club-P1.png",
        "/gallery/Azien-Luxury-Club-P2.png",
        "/gallery/Azien-Luxury-Club-P3.png",
        "/gallery/Azien-Luxury-Club-P4.png",
        "/gallery/Azien-Luxury-Club-P5.png",
        "/gallery/Azien-Luxury-Club-P6.png",
        "/gallery/Azien-Luxury-Club-P7.png",
        "/gallery/Azien-Luxury-Club-P8.png",
    ];

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
                        Azien Luxury Club Gallery
                    </h1>

                    <p className="mb-8 text-center text-lg">
                        A showcase of our premium brand, luxury fleet and exclusive visual identity.
                    </p>

                    {/* Responsive image grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition border border-gray-200"
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    width={500}
                                    height={400}
                                    className="h-64 w-full object-cover"
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
