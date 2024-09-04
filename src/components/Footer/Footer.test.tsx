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
    const bottomText = screen.getByTestId("bottom-text");
    expect(bottomText).toHaveTextContent(
      /Alexandra Blomberg © 2024 | Source code available here/i
    );
  });

  it("Checks for Github link in footer", () => {
    render(<Footer />);
    const externalLink = screen.getByRole("link");
    expect(externalLink).toBeInTheDocument();
    expect(externalLink).toHaveAttribute(
      "href",
      "https://github.com/blombergalex"
    );
  });

  it("Checks for mail address", () => {
    render(<Footer />);
    const mailLink = screen.getByRole("link", {
      name: "blombergalexandras@gmail.com",
    });
    expect(mailLink).toBeInTheDocument();
    expect(mailLink).toHaveAttribute(
      "href",
      "mailto:blombergalexandras@gmail.com"
    );
  });

  it("Checks for LinkedIn link", () => {
    render(<Footer />);
    const socialLink = screen.getByRole("link", { name: "LinkedIn" });
    expect(socialLink).toBeInTheDocument();
    expect(socialLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/alexandra-blomberg-7231a616a/"
    );
  });
});
