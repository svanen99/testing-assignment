import { render, screen } from "@testing-library/react";
import ProjectList from ".";

describe("The ProjectList is rendered correctly", () => {
  it("Checks that the projectlist-container is rendered", () => {
    render(<ProjectList />);
    const projectList = screen.getByTestId("project-list");
    expect(projectList).toBeInTheDocument();
  });

  it("Checks that the first four projects are rendered", () => {
    render(<ProjectList />);
    const visibleProjects = screen.queryAllByTestId("project");
    expect(visibleProjects.length).toBe(4);
  });

  it("Checks that the four visible projects has a specific title", () => {
    render(<ProjectList />);

    const defaultProjects = screen.queryAllByTestId("project");

    expect(defaultProjects[0]).toHaveTextContent("Project 1"); 
    expect(defaultProjects[1]).toHaveTextContent("Project 2"); 
    expect(defaultProjects[2]).toHaveTextContent("Project 3"); 
    expect(defaultProjects[3]).toHaveTextContent("Project 4"); 
  });

  it("Checks that all rendered projects ");
});
