import { render, screen } from "@testing-library/react";
import PreFooter from "@/components/molecules/preFooter/preFooter";
import Btn from "@/components/atoms/button/button";

describe("Unit:Molecule preFooter", () => {
  const mockComponent = (
    <PreFooter>
      <p>
        To hear about how we can support your business please leave a few
        contact details
      </p>
      <div className="flex justify-center mt-8">
        <Btn type="button" text="Get in touch" variant="secondary" />
      </div>{" "}
    </PreFooter>
  );

  it("renders prefooter", () => {
    render(mockComponent);

    const preFooter = screen.getByRole("preFooter");
    expect(preFooter).toHaveClass(
      "bg-[#4F5061] text-white text-2xl text-center"
    );

    const preFooterCopy = screen.getByRole("preFooterCopy");
    expect(preFooterCopy).toHaveTextContent(
      "To hear about how we can support your business please leave a few contact details"
    );
  });

  it("renders the button", () => {
    render(mockComponent);

    expect(screen.getByText("Get in touch")).toBeInTheDocument();
  });

  it("renders the flag icons", () => {
    render(mockComponent);

    expect(screen.getByRole("flagUs")).toBeInTheDocument();
    expect(screen.getByRole("flagAu")).toBeInTheDocument();
    expect(screen.getByRole("flagUk")).toBeInTheDocument();
    expect(screen.getByRole("flagEs")).toBeInTheDocument();
    expect(screen.getByRole("flagDe")).toBeInTheDocument();
    expect(screen.getByRole("flagPt")).toBeInTheDocument();
    expect(screen.getByRole("flagIt")).toBeInTheDocument();
  });

  it("checks against snapshot", () => {
    const view = render(mockComponent);
    expect(view).toMatchSnapshot();
  });
});
