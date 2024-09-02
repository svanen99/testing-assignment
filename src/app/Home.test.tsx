import { screen, render, fireEvent } from "@testing-library/react";

// UNIT TESTS

// check content is included:
// - Title for each section: About Me, Projects, Connect

describe("Checks that the home page content renders and work as expected", () => {
  it("Checks for section titles on the page", () => {
    // render all homepage components - can all be rendered after each other? or do one test for each component
    const mockSectionTitle = "Page section";
    render (<SectionTitle title={mockSectionTitle} />);
    const sectionTitle = screen.getAllByTestId; //using getAll because there has to be three sections
  });

  // integration test - state is passed from ShowAllButton to ProjectList
  it("Checks that showAll is saved in state when the ShowAllButton is clicked ", () => {
    render (
      <section data-testid="project-section">
        <ProjectList />
        <ShowAllButton />
      </section>
    )
    const visibleProjects = screen.getAllByTestId("project");
    expect(visibleProjects.length).toBe(4);

    const showAllButton = screen.getByTestId("show-all-btn");
    fireEvent.click(showAllButton);

    const allVisibleProjects = screen.queryAllByTestId("project");
    expect(allVisibleProjects.length).toBeGreaterThan(4);
  });
});