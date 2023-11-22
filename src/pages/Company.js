import Head from "next/head";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/SectionTitle";
import CompanyHero from "@/components/companyHero" 
import Footer from "@/components/footer";

export default function Company(){
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
            title=" Who are we?">
            We are a consultancy company based in Nairobi, Kenya.
            We provide consultancy services in the areas of customer relationship management (CRM) systems,
            business process automation and web application development. 
            Our solutions aim at blending current business processes with quality customer experience while 
            conforming to the industry standards, inturn improving the business brand love, which can be 
            translated to profitable growth of the business.
          </SectionTitle>
          <CompanyHero/>
          <Footer />
        </div>
      </>
    );
}