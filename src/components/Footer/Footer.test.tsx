import { screen, render } from "@testing-library/react";
import Footer from ".";

describe("Suite for footer component", () => {
  it("Checks footer renders correctly", () => {
    render(<Footer />);
    const footerContainer = screen.getByTestId("footer");
    expect(footerContainer).toBeInTheDocument();
  });

  it("Checks for correct info in footer", () => {
    render(<Footer />);
    const footerInfo = screen.getByTestId("footer");
    expect(footerInfo).toHaveTextContent(
      /Alexandra Blomberg © 2024 | See repo in Github/i
    );
  });

  it("Checks for link in footer", () => {
    render(<Footer />);
    const externalLink = screen.getByRole("link");
    expect(externalLink).toBeInTheDocument();
    expect(externalLink).toHaveAttribute(
      "href",
      "https://github.com/blombergalex/alex-bloom"
    );
  });
});
