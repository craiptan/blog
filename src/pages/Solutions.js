
import Head from "next/head";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import Benefits from "@/components/benefits";
import { benefitOne, benefitTwo } from "@/components/data";
import Video from "@/components/video";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
export default function Solutions(){
    return(
        <>
        <Head>
          <title>Whiptix </title>
          <meta
            name="description"
            content="Whiptix technologies"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div class="container mx-auto px-4">
          <Navbar />
          <Benefits imgPos="left" data={benefitTwo} /> 
          <Cta />
          <Footer />
        </div>
      </>
    );
}