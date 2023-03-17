interface IHero {
  headerIntro: string;
  headerMain: string;
  iconHero: string;
  strapLine: string;
  ctaBtn: string;
  scrollDown: string;
}

const Hero = ({
  headerIntro,
  headerMain,
  iconHero,
  strapLine,
  ctaBtn,
  scrollDown,
}: IHero) => {
  return (
    <div>
      <div>{headerIntro}</div>
      <div>{headerMain}</div>
      <div></div>
    </div>
  );
};

export default Hero;
