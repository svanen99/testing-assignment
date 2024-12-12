import { render, screen } from "@testing-library/react";
import FavouriteList from ".";
import { ProjectType } from "@/utils/types";

describe("FavouriteList", () => {
  it("renders a message when there are no favourites", () => {
    render(<FavouriteList favouriteIds={[]} projects={[]} />);
    expect(
      screen.getByText("You have no favourites yet.")
    ).toBeInTheDocument();
  });
  });