import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Products } from "@/components/products";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
