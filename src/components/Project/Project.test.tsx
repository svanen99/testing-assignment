import { screen, render, fireEvent } from "@testing-library/react";
import Project from ".";

describe("Checks project component has correct content and functionality", () => {
  const mockData = {
    id: "1",
    title: "mockTitle",
    imgSrc: "/images/mockimage.jpg",
    alt: "Mockalt text for image",
    description: "Here is a mockdescription of a project",
    githubLink: "https://github.com/blombergalex/project",
    websiteLink: "https://vercel.project.app",
    favourite: false,
  };

  it("Checks that the project component renders correctly", () => {
    render(<Project {...mockData} />);
    const project = screen.getByTestId("project");
    expect(project).toBeInTheDocument();
  });

  it("Checks the project title is rendered correctly", () => {
    render(<Project {...mockData} />);
    const projectTitle = screen.getByRole("heading", {
      level: 3,
      name: mockData.title,
    });

    expect(projectTitle).toBeInTheDocument();
  });

  it("Checks that project has correct image", () => {
    render(<Project {...mockData} />);

    const projectImage = screen.getByRole("img", { name: mockData.alt });
    expect(projectImage).toBeInTheDocument();
    expect(projectImage).toHaveAttribute(
      "src",
      expect.stringContaining(encodeURIComponent(mockData.imgSrc))
    );
  });

  it("Checks the project description is rendered correctly", () => {
    const mockDescription =
      "This project was created using React and Next.js, two powerful JavaScript frameworks for building modern web applications. The project showcases a dynamic and interactive user interface that leverages React's component-based architecture and Next.js's server-side rendering capabilities to deliver fast, optimized performance.";

    render(<Project {...mockData} />);
    const projectDescription = screen.getByText(mockData.description);

    expect(projectDescription).toBeInTheDocument();
  });

  it("Checks for links in project component", () => {
    render(<Project {...mockData} />);
    const githubLink = screen.getByTestId("github-link");
    const websiteLink = screen.getByTestId("website-link");

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", mockData.githubLink);
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    expect(websiteLink).toBeInTheDocument();
    expect(websiteLink).toHaveAttribute("href", mockData.websiteLink);
    expect(websiteLink).toHaveAttribute("target", "_blank");
    expect(websiteLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("Checks that favourite is saved in state on button click", () => {
    render(<Project {...mockData} />);
    const favouriteButton = screen.getByTestId("favourite-btn");
    expect(favouriteButton).toBeInTheDocument();

    expect(favouriteButton.classList.contains("text-gray-400")).toBe(true);
    fireEvent.click(favouriteButton);

    const updatedFavouriteButton = screen.getByTestId("favourite-btn");
    expect(favouriteButton.classList.contains("text-amber-500")).toBe(true);
  });

  it("Checks that favourite state is removed on second button click", () => {
    render(<Project {...mockData} />);
    const favouriteButton = screen.getByTestId("favourite-btn");
    expect(favouriteButton).toBeInTheDocument();

    expect(favouriteButton.classList.contains("text-amber-500")).toBe(true);

    fireEvent.click(favouriteButton);

    const updatedFavouriteButton = screen.getByTestId("favourite-btn");
    expect(updatedFavouriteButton.classList.contains("text-gray-400")).toBe(
      true
    );
  });
});
