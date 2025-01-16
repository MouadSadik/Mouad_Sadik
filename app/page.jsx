import Image from "next/image";
import About from "./Componentss/About";
import Hero from "./Componentss/Hero";
import { motion } from "framer-motion";
import Nav from "./Componentss/Nav";
import Skills from "./Componentss/Skills";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}
