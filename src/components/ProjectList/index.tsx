import { useState } from "react";
import Project from "../Project";
import { ProjectType } from "@/utils/types";

type ProjectListProps = {
    projectItems: ProjectType[];
    favouriteProjects: string[];
    onFavouriteToggle: (id: string) => void;
}

const ProjectList = ({ projectItems, onFavouriteToggle, favouriteProjects }: ProjectListProps) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col m-4 mx-auto">
      <div
        data-testid="project-list"
        className={`flex flex-wrap text-gray-200 justify-center ${
          projectItems.length % 2 ? "lg:justify-start" : ""
        }`}
      >
        {(showAll ? projectItems : projectItems.slice(0, 4)).map((item) => (
          <Project key={item.id}
            {...item}
            onFavouriteToggle={onFavouriteToggle}
            isFavourite={favouriteProjects.includes(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;