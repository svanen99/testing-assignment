import { screen, render } from "@testing-library/react";
import AboutMe from ".";
import { AboutMeType } from "@/utils/types";

const mockData:AboutMeType = {
  start: "This is a mock description written for the purpose of testing",
  experience: "This is a mock description of my experience for the purpose of testing",
  nextStep: "This is a mock description about the next step in my career",
  purpose: "This is a mock description of the purpose of this site"
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

  it("Checks for introduction", () => {
    render(<AboutMe  {...mockData} />);
    const description = screen.getByTestId("start");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(mockData.start);
  });

  it("Checks for experience text", () => {
    render(<AboutMe  {...mockData} />);
    const description = screen.getByTestId("experience");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(mockData.experience);
  });

  it("Checks for text about next step", () => {
    render(<AboutMe  {...mockData} />);
    const description = screen.getByTestId("next-step");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(mockData.nextStep);
  });

  it("Checks for description of the site's purpose", () => {
    render(<AboutMe {...mockData} />);
    const purpose = screen.getByTestId("purpose");
    expect("purpose-text").toBeInTheDocument();
    expect(purpose).toHaveTextContent(mockData.purpose);
  });
});