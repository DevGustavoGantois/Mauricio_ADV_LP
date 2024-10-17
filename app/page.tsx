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
    <head>
       <meta name="google-site-verification" content="M4Pw1J2X-V6c2FotMav2KX72M48-Zvp0Lhnc9Q4qOnI" />
    </head>
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
