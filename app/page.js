import ContactSection from "@/components/Contact";
import FutureGoalsSection from "@/components/Goal";
import HeroSection from "@/components/Hero";
import HobbySection from "@/components/hobby";
import Navbar from "@/components/Navar";
import Skills from "@/components/skills";

export default function Home() {
  return (
      <>
          <Navbar />
          <HeroSection />
      <Skills />
      <FutureGoalsSection />
      <HobbySection />
      <ContactSection />
      </>
  );
}
