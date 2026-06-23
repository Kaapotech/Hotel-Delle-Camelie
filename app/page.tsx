import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Prices from "./components/Prices";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <Testimonials />
        <Prices />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
