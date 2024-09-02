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
    const title = "Alexandra Blomberg, aka Blomman";
    render(<AboutMe title={title}/>);
    const fullName = screen.getByTestId("full-name");
    expect(fullName).toHaveTextContent(title);
  });

  it("Checks for personal description", () => {
    const mockDescription = "Description of me..."
    render(<AboutMe description={mockDescription} />);
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(mockDescription);
  });

  it("Checks for description of the site's purpose", () => {
    const mockPurpose = "The purpose of this site is..."
    render(<AboutMe purpose={mockPurpose}/>);
    const purpose = screen.getByTestId("purpose-text");
    expect("purpose-text").toBeInTheDocument();
    expect(purpose).toHaveTextContent(mockPurpose);
  });
});
