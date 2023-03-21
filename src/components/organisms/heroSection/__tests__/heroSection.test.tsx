import { render, screen } from "@testing-library/react";
import Hero from "@/components/organisms/heroSection/hero";
import DgIcon from "@/components/atoms/icons/dgIcon";
import Btn from "@/components/atoms/button/button";

describe("Unit:Organism HeroSection", () => {
  const mockComponent = (
    <Hero
      headerIntro="We Are Domestic & General"
      headerMain="Grow your business with a world-class home warranty solution"
      strapLine="Established in 1912, today we empower leading global retailers and manufacturers to offer millions of customers exceptional product protection"
      bgGradient="125deg,_#0D77DB_0%,_#0265C1_12%,_#0265C0_53%,_#0054A3_100%"
      icon={<DgIcon icon="heroHome" size="heroLg" />}
      ctaBtn={<Btn variant="secondary" type="button" text="Schedule a call" />}
    />
  );

  it("renders hero section", () => {
    render(mockComponent);

    const hero = screen.getByRole("heroSection");
    const heroHeaderIntro = screen.getByRole("heroHeaderIntro");
    const heroHeaderMain = screen.getByRole("heroHeaderMain");
    const heroHeaderIcon = screen.getByRole("heroHeaderIcon");
    const heroHeaderStrapLine = screen.getByRole("heroHeaderStrapLine");
    const heroHeaderBtn = screen.getByRole("heroHeaderBtn");

    // Check it's there
    expect(hero).toBeTruthy();

    // Check for copy
    expect(heroHeaderIntro).toHaveTextContent("We Are Domestic & General");
    expect(heroHeaderMain).toHaveTextContent(
      "Grow your business with a world-class home warranty solution"
    );
    expect(heroHeaderStrapLine).toHaveTextContent(
      "Established in 1912, today we empower leading global retailers and manufacturers to offer millions of customers exceptional product protection"
    );

    expect(screen.getByText("Schedule a call")).toBeInTheDocument();
  });

  it("renders the cta button", () => {
    render(mockComponent);

    // Check it's there
    expect(screen.getByRole("heroHeaderBtn")).toBeTruthy();

    // Check button label text
    expect(screen.getByRole("heroHeaderBtn")).toHaveTextContent(
      "Schedule a call"
    );
  });

  it("checks against snapshot", () => {
    const view = render(mockComponent);
    expect(view).toMatchSnapshot();
  });
});
