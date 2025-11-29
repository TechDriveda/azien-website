// app/calculator/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProfitCalculatorForm from "../components/ProfitCalculatorForm";

export default function CalculatorPage() {
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
            <ProfitCalculatorForm />
            <Footer />
        </div>
    );
}
