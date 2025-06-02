import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <Newsletter />
          <CTA />
      </main>
      <Footer />
    </div>
  );
}
