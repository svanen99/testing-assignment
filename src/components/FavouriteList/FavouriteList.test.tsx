import { screen, render } from "@testing-library/react";

describe("That the Favourite-list renders as expected", () => {
  it("Checks that the list shows when expected", () => {
    render(<FavouriteList />);
    const favouriteList = screen.queryByTestId("favourite-list");
    expect("favourite-list").not.toBeInTheDocument(); // not showing at start
  });

  
});
