import Image from "next/image";

interface IHero {
  headerIntro: string;
  headerMain: string;
  icon: JSX.Element;
  strapLine: string;
  ctaBtn: JSX.Element;
  bgGradient: string;
}

const Hero = ({ headerIntro, headerMain, icon, strapLine, ctaBtn }: IHero) => {
  return (
    // <div className="bg-[radial-gradient(_#0D77DB_0%,_#0265C1_12%,_#0265C0_53%,_#0054A3_100%)]">
    <div
      role="heroSection"
      className=" relative bg-heroBg-Dg py-8 px-6 lg:py-16"
    >
      <div
        role="heroHeaderIntro"
        className="flex items-center justify-center text-base uppercase text-white lg:text-lg"
      >
        {headerIntro}
      </div>
      <div
        role="heroHeaderMain"
        className="mx-auto mt-8 text-center text-[28px] text-white md:max-w-[512px] md:text-[30px] lg:max-w-[768px] lg:text-[40px]"
      >
        {headerMain}
      </div>
      <div
        role="heroHeaderIcon"
        className="-my-10 flex items-center justify-center"
      >
        {icon}
      </div>
      <div
        role="heroHeaderStrapLine"
        className="mx-auto text-center text-white md:max-w-[660px] lg:max-w-[768px]"
      >
        {strapLine}
      </div>
      <div
        role="heroHeaderBtn"
        className="mt-8 flex items-center justify-center"
      >
        {ctaBtn}
      </div>
    </div>
  );
};

export default Hero;
