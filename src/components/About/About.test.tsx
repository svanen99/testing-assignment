import { screen, render } from "@testing-library/react";
import AboutMe from ".";
import { AboutMeType } from "@/utils/types";

const mockData:AboutMeType = {
  aboutDescription: "This is a mock description written for the purpose of testing",
  aboutPurpose: "This is a mock description of the purpose of this site"
}

describe("Checks that about component renders correctly", () => {
  it("Checks component renders", () => {
    render (<AboutMe {...mockData} />)
    const aboutMe = screen.getByTestId("about-me-section");
    expect(aboutMe).toBeInTheDocument();
  })

  it("Checks for About Me section title", () => {
    render(<AboutMe {...mockData} />);
    const greeting = screen.getByRole("heading", {
      level: 2,
      name: "Hello",
    });
    expect(greeting).toBeInTheDocument();
  });

  it("Checks for correct name", () => {
    render(<AboutMe {...mockData} />);
    const name = screen.getByRole("heading", {
      level: 3,
      name: "I'm Alexandra",
    });
    expect(name).toBeInTheDocument();
  });

  it("Checks for personal description", () => {
    render(<AboutMe  {...mockData} />);
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(mockData.aboutDescription);
  });

  it("Checks for description of the site's purpose", () => {
    render(<AboutMe {...mockData} />);
    const purpose = screen.getByTestId("purpose-text");
    expect("purpose-text").toBeInTheDocument();
    expect(purpose).toHaveTextContent(mockData.aboutPurpose);
  });
});