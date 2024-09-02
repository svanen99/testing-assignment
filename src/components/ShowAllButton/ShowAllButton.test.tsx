import { screen, render } from "@testing-library/react";
import ShowAllButton from ".";

describe("Check the showAll button", () => {
  it("Checks that the button renders properly", () => {
    render(<ShowAllButton />);
    const showAllButton = screen.getByTestId("show-all-btn");
    expect(showAllButton).toHaveTextContent("Show all projects");
  });
});
