import LogoBar, { ILogoBar } from "@/components/atoms/logoBar/logoBar";

type IHeader = {
  className: string;
  primaryLogoBar: ILogoBar;
  secondaryLogoBar: ILogoBar;
};

const Header = ({
  className,
  primaryLogoBar,
  secondaryLogoBar,
}: IHeader): JSX.Element => {
  return (
    <div className={className}>
      <LogoBar
        bgClassName={primaryLogoBar.bgClassName}
        className={primaryLogoBar.className}
        image={primaryLogoBar.image}
      />
      <LogoBar
        bgClassName={secondaryLogoBar.bgClassName}
        className={secondaryLogoBar.className}
        image={secondaryLogoBar.image}
      />
    </div>
  );
};

export default Header;
