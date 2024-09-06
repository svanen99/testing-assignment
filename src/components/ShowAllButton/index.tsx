import React from "react";

type ShowAllButtonProps = {
  onShowAllToggle: () => void;
  showAll: boolean;
};

const ShowAllButton = ({ onShowAllToggle, showAll }: ShowAllButtonProps) => {
  return (
    <div className="flex justify-end m-4">
      <div
        data-testid="show-all-btn"
        onClick={onShowAllToggle}
        className="cursor-pointer w-fit text-amber-500 bg-transparent border-2 rounded-md p-2 border-amber-500"
      >
        {showAll ? "Show less projects" : "Show all projects"}
      </div>
    </div>
  );
};

export default ShowAllButton;
