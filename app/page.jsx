import Image from "next/image";
import About from "./Componentss/About";
import Hero from "./Componentss/Hero";
import { motion } from "framer-motion";
import Nav from "./Componentss/Nav";
import Skills from "./Componentss/Skills";
import Techno from "./Componentss/Techno";
import Testimonials from "./Componentss/Testimonials";
import Footer from "./Componentss/Footer";
  
export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Techno />
      <Testimonials />
      <Footer />
    </div>
  );
}
