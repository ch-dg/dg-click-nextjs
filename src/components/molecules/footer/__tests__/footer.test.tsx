import { render, screen } from "@testing-library/react";
import Footer from "@/components/molecules/footer/footer";
import { LayoutController } from "@/components/layout/layoutController";

describe("Unit:Molecule Footer", () => {
  const { thisYear } = LayoutController();

  const mockComponent = (
    <Footer year={thisYear} classNames="bg-gray-100 text-[#0168B4]">
      <p className="mb-4">Lorem ipsum dolor sit amet.</p>
    </Footer>
  );

  it("renders SectionDivider", () => {
    render(mockComponent);

    const footer = screen.getByRole("pageFooter");
    expect(footer).toHaveClass("bg-gray-100 text-[#0168B4]");
    expect(footer.textContent).toEqual(
      "Lorem ipsum dolor sit amet.© 2023 Domestic & General Group Limited"
    );
  });

  it("checks against snapshot", () => {
    const view = render(mockComponent);
    expect(view).toMatchSnapshot();
  });
});
