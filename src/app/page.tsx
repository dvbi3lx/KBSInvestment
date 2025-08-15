import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Realizations } from "@/components/realizations";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Realizations />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
