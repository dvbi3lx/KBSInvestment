import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
// import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
// import { Realizations } from "@/components/realizations";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Ukryty formularz dla Netlify Forms - musi być w głównej stronie */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="phone" />
        <input type="text" name="service" />
        <textarea name="message"></textarea>
        <input type="checkbox" name="consent" />
        <input type="text" name="bot-field" />
      </form>
      
      <Hero />
      <Services />
      <WhyChooseUs />
      {/* <Realizations /> */}
      {/* <Testimonials /> */}
      <FAQ />
      <ContactSection />
      <Footer />
      <CookieConsent />
    </main>
  );
}
