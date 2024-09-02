import { screen, render } from "@testing-library/react";

describe("Checks that the home page content renders and work as expected", () => {
  it("Checks for About Me section title", () => {
    render(< AboutMe/>);
    const aboutSectionTitle = screen.getByRole("heading", {
      level: 2,
      name: "About Me",
    });
    expect(aboutSectionTitle).toBeInTheDocument();
  });

 

  // integration test - state is passed from ShowAllButton to ProjectList
  
});
