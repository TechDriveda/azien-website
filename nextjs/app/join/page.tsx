// app/membership/page.tsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import MembershipForm from "../components/MembershipForm";

export default function MembershipPage() {
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
            <MembershipForm />
            <Footer />
        </div>
    );
}

