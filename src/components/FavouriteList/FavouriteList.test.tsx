import { screen, render } from "@testing-library/react";
import FavouriteList from ".";

describe("That the Favourite-list renders as expected", () => {
  it("Checks that the list shows when expected", () => {
    render(<FavouriteList />);
    const favouriteList = screen.queryByTestId("favourite-list");
    expect("favourite-list").not.toBeInTheDocument(); // not showing at start
  });

  it("Checks for Favourite list title", () => {
    render(<FavouriteList />);
    const sectionTitle = screen.getByRole("heading", {
      level: 2,
      name: "Your favourites",
    });
    expect(sectionTitle).toBeInTheDocument();
  });
});
