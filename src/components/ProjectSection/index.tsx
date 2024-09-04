"use client";

import { useState } from "react";
import ProjectList from "../ProjectList";
import { projects } from "@/utils/data";
import FavouriteList from "../FavouriteList";

const ProjectSection = () => {
  // const [showAll, setShowAll] = useState(false); // starts as false to hide all but four projects, state should be passed to each project, if showAll, show all, else show only four
  const [favouriteProjects, setFavouriteProjects] = useState<string[]>([]);

  const handleFavouriteToggle = (id: string) => {
    setFavouriteProjects(
      (
        prevFavourites // prevFavourites holds the current state of favouriteProjects
      ) =>
        prevFavourites.includes(id) // if clicked id is already in favourites array, it is removed
          ? prevFavourites.filter((favId) => favId !== id) // creates new array including elements from prevFavourites except the one with matching id, removing the id from the favourites list
          : [...prevFavourites, id] // the id is not in the prevFavourites list so it should be added to the list
    );
  };

  return (
    <section datatest-id="project-section" className="md:p-14">
      <h2 className="text-gray-200 bg-black text-center py-6 font-SansNarrow font-semi-bold text-lg md:text-2xl sticky top-0 z-10">
        My Projects
      </h2>
      <ProjectList
        projectItems={projects}
        onFavouriteToggle={handleFavouriteToggle} 
        favouriteProjects={favouriteProjects}
      />
      {/* <ShowAllButton /> */}
      <FavouriteList favouriteIds={favouriteProjects} projects={projects} />
    </section>
  );
};

export default ProjectSection;
