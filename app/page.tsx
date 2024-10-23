import { AboutMe } from "@/components/AboutMe";
import { AboutOffice } from "@/components/AboutOffice";
import { Contact } from "@/components/Contact";
import { Featured } from "@/components/Featured";
import { FeaturedTwo } from "@/components/FeaturedTwo";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { Testimonials } from "@/components/Testimonials";
import Head from "next/head";

export default function Home() {

  return (
    <>
    <main>
    <Head>
    <meta name="google-site-verification=YYTGdng2CumMVhVlK1mX4XHvwnSaTHncdYAVWsi75GQ" />
    <title>Escritório de Advocacia Maurício Sampaio</title>
    </Head>
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
