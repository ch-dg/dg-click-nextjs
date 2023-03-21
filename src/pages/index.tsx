import Head from "next/head";
import Hero from "@/components/organisms/heroSection/hero";
import DgIcon from "@/components/atoms/icons/dgIcon";
import Btn from "@/components/atoms/button/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello dg-click</title>
        <meta name="description" content="DG Click Welcome" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="col-span-4 md:col-span-8 lg:col-span-12">
        <div className="-ml-6 -mr-6 md:ml-0 md:mr-0">
          <Hero
            headerIntro="We Are Domestic & General"
            headerMain="Grow your business with a world-class home warranty solution"
            strapLine="Established in 1912, today we empower leading global retailers and manufacturers to offer millions of customers exceptional product protection"
            bgGradient="125deg,_#0D77DB_0%,_#0265C1_12%,_#0265C0_53%,_#0054A3_100%"
            icon={<DgIcon icon="heroHome" size="heroLg" />}
            ctaBtn={
              <Btn variant="secondary" type="button" text="Schedule a call" />
            }
          />
        </div>
      </div>

      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>

      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
      <div className="h-72 bg-blue-100">col</div>
    </>
  );
}
