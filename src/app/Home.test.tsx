import { screen, render, fireEvent } from "@testing-library/react";

describe("Checks that the home page content renders and work as expected", () => {
  it("Checks for About Me section title", () => {
    render(< AboutMe/>);
    const aboutSectionTitle = screen.getByRole("heading", {
      level: 2,
      name: "About Me",
    });
    expect(aboutSectionTitle).toBeInTheDocument();
  });

  it("Checks for Connect section title", () => {
    render(< Connect/>);
    const connectSectionTitle = screen.getByRole("heading", {
      level: 2,
      name: "Let's Connect",
    });
    expect(connectSectionTitle).toBeInTheDocument();
  });

  // integration test - state is passed from ShowAllButton to ProjectList
  
});
