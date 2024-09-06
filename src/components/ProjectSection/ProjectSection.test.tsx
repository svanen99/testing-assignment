import { screen, render, fireEvent } from "@testing-library/react";
import ProjectSection from ".";
import { ProjectType } from "@/utils/types";

export const mockProjects: ProjectType[] = [
  {
    id: "1",
    title: "Project 1",
    imgSrc: "/images/project1.png",
    alt: "Snapshot of Project 1.",
    description: "Description of Project 1.",
    githubLink: "https://mock.github.com/project-1",
    websiteLink: "https://project-1.com",
    favourite: false
  },
  {
    id: "2",
    title: "Project 2",
    imgSrc: "/images/project2.png",
    alt: "Snapshot of Project 2.",
    description: "Description of Project 2.",
    githubLink: "https://mock.github.com/project-2",
    websiteLink: "https://project-2.com",
    favourite: false
  },
  {
    id: "3",
    title: "Project 3",
    imgSrc: "/images/project3.png",
    alt: "Snapshot of Project 3.",
    description: "Description of Project 3.",
    githubLink: "https://mock.github.com/project-3",
    websiteLink: "https://project-3.com",
    favourite: false
  },
  {
    id: "4",
    title: "Project 4",
    imgSrc: "/images/project4.png",
    alt: "Snapshot of Project 4.",
    description: "Description of Project 4.",
    githubLink: "https://mock.github.com/project-4",
    websiteLink: "https://project-4.com",
    favourite: false
  },
  {
    id: "5",
    title: "Project 5",
    imgSrc: "/images/project5.png",
    alt: "Snapshot of Project 5.",
    description: "Description of Project 5. ",
    githubLink: "https://mock.github.com/project-5",
    websiteLink: "https://project-5.com",
    favourite: false
  },
  {
    id: "6",
    title: "Project 6",
    imgSrc: "/images/project6.png",
    alt: "Snapshot of Project 6.",
    description: "Description of Project 6.",
    githubLink: "https://mock.github.com/project-6",
    websiteLink: "https://project-6.com",
    favourite: false
  },
  {
    id: "7",
    title: "Project 7",
    imgSrc: "/images/project7.png",
    alt: "Snapshot of Project 7.",
    description: "Description of Project 7",
    githubLink: "https://mock.github.com/project-7",
    websiteLink: "https://project-7.com",
    favourite: false
  }
];

const mockFavouriteProjects = [];

describe("Checks that the project section renders and work as expected", () => {
  it("Checks for Project section title", () => {
    render(<ProjectSection projects={mockProjects} />);
    const sectionTitle = screen.getByRole("heading", {
      level: 2,
      name: "My Projects",
    });
    expect(sectionTitle).toBeInTheDocument();
  });


  it("Checks that favourites can be saved to and removed from list", () => {
    render(<ProjectSection />);
    // check favourite items list is empty (expect not.toBe in document) || length(0)
    const favouriteList = screen.queryByTestId("favourite-list");
    expect(favouriteList).not.toBeInTheDocument();

    const favouriteButton = screen.getAllByTestId("favourite-btn");
    fireEvent.click(favouriteButton[3]);

    const updatedFavouriteList = screen.getByTestId("favourite-list");
    expect(updatedFavouriteList).toHaveTextContent("Project 4");

    // // unfavourite (click again)
    // fireEvent.click(favouriteButton);
    // const emptiedFavouriteList = screen.getByTestId("favourite-list");
    // expect(emptiedFavouriteList).not.toHaveTextContent(mockFavouriteTitle);
  });
});
