import Head from "next/head";
import Hero from "@/components/organism/heroSection/hero";

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
        <Hero
          headerIntro={"We Are Domestic & General"}
          headerMain={
            "Grow your business with a world-class home warranty solution"
          }
        />
      </div>

      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>

      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
      <div className="bg-blue-100 h-72">col</div>
    </>
  );
}
