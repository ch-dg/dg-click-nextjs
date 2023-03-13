import Head from "next/head";

import Header from "@/components/molecules/header/header";
import dgLogo from "@/assets/dgLogo.svg";
import dgLogoFull from "@/assets/dgLogoFull.svg";

interface ILayout {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: ILayout): JSX.Element => {
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
              alt: "hughes-logo",
              className: "",
              priority: true,
            },
            bgClassName: "px-6 md:px-12 bg-white",
            className: "flex items-center justify-start py-6",
          }}
          secondaryLogoBar={{
            image: {
              src: dgLogo,
              alt: "dg-logo",
              className: "",
            },
            bgClassName: "bg-[#F5F5F5] px-6 md:px-12",
            className: "flex items-center justify-end py-2",
          }}
        />
      </header>

      {/* Main grid container */}
      <main>
        <div className="px-6 md:px-16 bg-red-100">
          <div className="container mx-auto bg-orange-100">
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LayoutMain;
