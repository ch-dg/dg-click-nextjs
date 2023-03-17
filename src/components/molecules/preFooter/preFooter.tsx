import DgIcon from "@/components/atoms/icons/dgIcon";

type Props = {
  children: React.ReactNode;
};

const PreFooter: React.FC<Props> = ({ children }) => {
  return (
    <div
      role="preFooter"
      className=" bg-[#4F5061] text-white text-2xl text-center"
    >
      <div className="container mx-auto pt-8 pb-16">
        <div role="preFooterCopy">{children}</div>
        <div className="flex justify-center items-center mt-12">
          <DgIcon icon={"flagUs"} size={3} styles={""} colour={`#fff`} />{" "}
          <DgIcon icon={"flagAu"} size={3} styles={"ml-4"} colour={`#fff`} />{" "}
          <DgIcon icon={"flagUk"} size={3} styles={"ml-4"} colour={`#fff`} />{" "}
          <DgIcon icon={"flagEs"} size={3} styles={"ml-4"} colour={`#fff`} />{" "}
          <DgIcon icon={"flagDe"} size={3} styles={"ml-4"} colour={`#fff`} />{" "}
          <DgIcon icon={"flagPt"} size={3} styles={"ml-4"} colour={`#fff`} />{" "}
          <DgIcon icon={"flagIt"} size={3} styles={"ml-4"} colour={`#fff`} />{" "}
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
