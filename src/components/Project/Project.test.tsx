import { screen, render, fireEvent } from "@testing-library/react";
import Project from ".";

describe("Checks project component has correct content and functionality", () => {
  it("Checks that the project component renders correctly", () => {
    render(<Project />);
    const project = screen.getByTestId("project");
    expect(project).toBeInTheDocument();
  });

  it("Checks the project title is rendered correctly", () => {
    const mockTitle = "Project no 1";

    render(<Project title={mockTitle} />);
    const projectTitle = screen.getByRole("heading", {
      level: 3,
      name: mockTitle,
    });

    expect(projectTitle).toBeInTheDocument();
  });

  it("Checks that project has correct image", () => {
    const mockImageSrc = "/img.jpg";
    const mockAltText = "Project Name";

    render(<Project imgSrc={mockImageSrc} alt={mockAltText} />);

    const projectImage = screen.getByRole("img", { name: mockAltText });
    expect(projectImage).toBeInTheDocument();
    expect(projectImage).toHaveAttribute("src", mockImageSrc);
  });

  it("Checks the project description is rendered correctly", () => {
    const mockDescription =
      "This project was created using React and Next.js, two powerful JavaScript frameworks for building modern web applications. The project showcases a dynamic and interactive user interface that leverages React's component-based architecture and Next.js's server-side rendering capabilities to deliver fast, optimized performance.";

    render(<Project title={mockDescription} />);
    const projectDescription = screen.getByText(mockDescription);

    expect(projectDescription).toBeInTheDocument();
  });

  it("Checks for links in project component", () => {
    const mockGithubLink = "https://github.com/blombergalex/project";
    const mockWebsiteLink = "project.vercel.app";

    render(<Project />);
    const githubLink = screen.getByTestId("github-link");
    const websiteLink = screen.getByTestId("website-link");

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", mockGithubLink);
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink).toHaveAttribute("href", mockWebsiteLink);
    expect(websiteLink).toHaveAttribute("target", "_blank");
    expect(websiteLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("Checks that favourite is saved in state on button click", () => {
    render(<Project />);
    const favouriteButton = screen.getByTestId("favourite-btn");
    expect(favouriteButton).toBeInTheDocument();

    expect(favouriteButton).toHaveClass("text-gray-400"); // expect favourite state at page load to be false ie heart is grey:

    fireEvent.click(favouriteButton);

    const updatedFavouriteButton = screen.getByTestId("favourite-btn");
    expect(updatedFavouriteButton).toHaveClass("text-amber-500"); // expect favourite state at page load to be true ie heart is yellow:
  });

  it("Checks that favourite state is removed on second button click", () => {
    render(<Project />);
    const favouriteButton = screen.getByTestId("favourite-btn");
    expect(favouriteButton).toBeInTheDocument();

    expect(favouriteButton).toHaveClass("text-amber-500");

    fireEvent.click(favouriteButton);

    const updatedFavouriteButton = screen.getByTestId("favourite-btn");
    expect(updatedFavouriteButton).toHaveClass("text-gray-400");
  });
});
