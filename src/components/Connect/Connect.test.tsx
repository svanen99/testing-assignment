import { screen, render } from "@testing-library/react";
import Connect from ".";

describe("Checks that Connect component renders correctly", () => {
  it("Checks for Connect section title", () => {
    render(<Connect />);
    const connectSectionTitle = screen.getByRole("heading", {
      level: 2,
      name: "Let's connect",
    });
    expect(connectSectionTitle).toBeInTheDocument();
  });

  it("Checks for mail address", () => {
    render(<Connect />);
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
    render(<Connect />);
    const socialLink = screen.getByRole("link", { name: "LinkedIn" });
    expect(socialLink).toBeInTheDocument();
    expect(socialLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/alexandra-blomberg-7231a616a/"
    );
  });

  it("Checks for image", () => {
    const mockImgSrc = "images/profile.jpg";
    const mockAltText = "Image of Alexandra";

    render(<Connect imgSrc={mockImgSrc} alt={mockAltText} />);

    const profileImage = screen.getByRole("img", {name: mockAltText});
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("src", mockImgSrc);
  });
});
