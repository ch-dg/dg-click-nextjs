type Props = {
  year: number; // ideally this value should come from an api response
  children: React.ReactNode;
  classNames: string;
};

const Footer: React.FC<Props> = ({ year, children, classNames }) => {
  return (
    <footer role="pageFooter" className={classNames}>
      <div className="container mx-auto py-8 text-xs text-center">
        <div>{children}</div>
        <p className="mt-4 leading-5">
          &copy; {year} Domestic &amp; General Group Limited
        </p>
      </div>
    </footer>
  );
};

export default Footer;
