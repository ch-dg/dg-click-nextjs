import Head from "next/head";

interface ILayout {
  children: React.ReactNode;
}

const LayoutMain = ({ children }: ILayout): JSX.Element => {
  return (
    <>
      <Head>
        <title>DG Click Welcome</title>
      </Head>
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
