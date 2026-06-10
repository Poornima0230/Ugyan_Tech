import About from "@/components/About";
import Cards from "@/components/Card";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Services from "@/components/services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Cards />
      <Services />
      <Project />
      <Testimonials />
      <Contact />
    </>
  );
}
