import { AboutMe } from "@/components/AboutMe";
import { AboutOffice } from "@/components/AboutOffice";
import { Contact } from "@/components/Contact";
import { Featured } from "@/components/Featured";
import { FeaturedTwo } from "@/components/FeaturedTwo";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {

  return (
    <>
    <main>
      <Hero />
      <Featured />
      <AboutOffice />
      <AboutMe />
      <Testimonials />
      <FeaturedTwo/>
      <LocationSection />
      <Contact />
    </main>
    </>
  );
}
