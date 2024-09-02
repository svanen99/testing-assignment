import { screen, render } from "@testing-library/react";

describe("Checks that about component renders correctly", () => {
  it("Checks for About Me section title", () => {
    render(<AboutMe />);
    const greeting = screen.getByRole("heading", {
      level: 2,
      name: "Hello",
    });
    expect(greeting).toBeInTheDocument();
  });

  it("Checks for correct name", () => {
    render(<AboutMe />);
    const name = screen.getByRole("heading", {
      level: 3,
      name: "I'm Alexandra",
    });
    expect(name).toBeInTheDocument();
  });

  it("Checks for full name", () => {
    render(<AboutMe />);
    const fullName = screen.getByTestId("full-name");
    expect(fullName).toHaveTextContent("Alexandra Blomberg, aka Blomman");
  });

  it("Checks for personal description", () => {
    render(<AboutMe />);
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
  });

  it("Checks for description of the site's purpose", () => {
    render(<AboutMe />);
    const purpose = screen.getByTestId("purpose-text");
    expect("purpose-text").toBeInTheDocument();
  });
});
