import { screen, render, fireEvent } from "@testing-library/react";
import ProjectSection from ".";

describe("Checks that the project section renders and work as expected", () => {
  it("Checks for Project section title", () => {
    render(<ProjectSection />);
    const sectionTitle = screen.getByRole("heading", {
      level: 2,
      name: "My Projects",
    });
    expect(sectionTitle).toBeInTheDocument();
  });

  it("Checks that showAll is saved in state when the ShowAllButton is clicked ", () => {
    render(<ProjectSection />);
    const visibleProjects = screen.getAllByTestId("project");
    expect(visibleProjects.length).toBe(4);

    const showAllButton = screen.getByTestId("show-all-btn");
    fireEvent.click(showAllButton);

    const allVisibleProjects = screen.queryAllByTestId("project");
    expect(allVisibleProjects.length).toBeGreaterThan(4);
  });

  it("Checks that favourites are saved in list", () => {
    const mockFavouriteTitle = "Project no 3";
    render(<ProjectSection />);
    // check favourite items list is empty (expect not.toBe in document) || length(0)
    const favouriteList = screen.queryByTestId("favourite-list");
    expect(favouriteList).not.toBeInTheDocument();

    const favouriteButton = screen.getByTestId("favourite-btn");
    fireEvent.click(favouriteButton);

    const updatedFavouriteList = screen.getByTestId("favourite-list");
    expect(updatedFavouriteList).toHaveTextContent(mockFavouriteTitle);
  });
});