
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
          <SectionTitle
            title=" What defines us?">
            We are a consultancy company based in Nairobi, Kenya.
            We provide consultancy services in the areas of customer relationship management (CRM) systems,
            business process automation and web application development. 
            Our solutions aim at blending current business processes with quality customer experience while 
            conforming to the industry standards, inturn improving the business brand love, which can be 
            translated to profitable growth of the business.
          </SectionTitle>
          <Benefits imgPos="right" data={benefitTwo} /> 
          {/* <SectionTitle
            pretitle="Watch a video"
            title="Learn how to fullfil your needs">
            This section is to highlight a promo or demo video of your product.
            Analysts says a landing page with video has 3% more conversion rate. So,
            don&apos;t forget to add one. Just like this.
          </SectionTitle>
          <Video /> */}
          <Cta />
          <Footer />
        </div>
      </>
    );
}