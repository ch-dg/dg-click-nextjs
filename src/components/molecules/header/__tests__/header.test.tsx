import { render, screen } from "@testing-library/react";
import dgLogoFull from "@/assets/dgLogoFull.svg";
import Header from "@/components/molecules/header/header";

describe("Unit:Molecule header", () => {
  const mockPrimaryLogoBar = {
    image: {
      src: dgLogoFull,
      alt: "domestic and general logo",
      className: "w-auto h-auto",
      priority: true,
    },
    bgClassName: "px-6 md:px-12 bg-white",
    className: "flex items-center justify-start py-6",
  };

  const mockComponent = (
    <Header
      className="mb-24 flex w-screen flex-col justify-center"
      primaryLogoBar={mockPrimaryLogoBar}
    />
  );

  it("renders LogoBar", () => {
    render(mockComponent);
    const primaryImage = screen.getByRole("img", {
      name: /domestic and general logo/i,
    });

    expect(primaryImage).toBeInTheDocument();
    expect(primaryImage).toHaveAttribute("alt", "domestic and general logo");
    expect(primaryImage).toHaveClass("w-auto h-auto");
  });

  it("checks against snapshot", () => {
    const view = render(mockComponent);
    expect(view).toMatchSnapshot();
  });
});
