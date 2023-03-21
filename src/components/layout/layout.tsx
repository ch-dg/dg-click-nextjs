import Head from "next/head";

import Header from "@/components/molecules/header/header";
import PreFooter from "@/components/molecules/preFooter/preFooter";
import Footer from "@/components/molecules/footer/footer";
import Btn from "@/components/atoms/button/button";

import dgLogoFull from "@/assets/dgLogoFull.svg";

import { LayoutController } from "./layoutController";

interface ILayout {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: ILayout): JSX.Element => {
  const { thisYear } = LayoutController();

  return (
    <>
      <Head>
        <title>DG Click Welcome</title>
      </Head>
      {/* Page header */}
      <header>
        <Header
          className=""
          primaryLogoBar={{
            image: {
              src: dgLogoFull,
              alt: "domestic and general logo",
              className: "",
              priority: true,
            },
            bgClassName: "px-6 md:px-12 bg-white",
            className: "flex items-center justify-start py-6",
          }}
        />
      </header>

      {/* Main grid container */}
      <main>
        <div className="px-6 md:px-16">
          <div className="container mx-auto bg-orange-100">
            <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Pre-Footer */}
      <PreFooter>
        <p>
          To hear about how we can support your business please leave a few
          contact details
        </p>
        <div className="mt-8 flex justify-center">
          <Btn type="button" text="Get in touch" variant="secondary" />
        </div>
      </PreFooter>

      {/* Footer */}
      <footer>
        <Footer year={thisYear} classNames="bg-gray-100 text-[#0168B4]">
          <p className="leading-5">
            To hear about how we can support your business please leave a few
            contact details Get in touch Service plans, maintenance & support
            plans are provided by Domestic & General Services Limited. Insurance
            policies are provided by Domestic & General Insurance PLC. Domestic
            & General Insurance PLC is an insurance undertaking, not an
            intermediary. We are the underwriter of the insurance policies and
            do not provide a personal recommendation or advice. Domestic &
            General Insurance PLC is authorised by the Prudential Regulation
            Authority and regulated by the Financial Conduct Authority and the
            Prudential Regulation Authority (Financial Services Register Number
            202111). Our address and details of our authorisation can be checked
            on the FCA website or by contacting the FCA on 0800 111 6768.
          </p>
          <p className="mt-4 leading-5">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </Footer>
      </footer>
    </>
  );
};

export default LayoutMain;
