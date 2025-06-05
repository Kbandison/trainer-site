import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TransformationGallery from "./components/TransformationGallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import Nav from "./components/Nav";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <TransformationGallery />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTABanner />
        <Footer />
        {/* <StickyCTA /> */}
      </main>
    </>
  );
}
