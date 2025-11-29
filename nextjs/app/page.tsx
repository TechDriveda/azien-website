import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

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
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
