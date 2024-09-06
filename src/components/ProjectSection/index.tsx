"use client";

import { useState } from "react";
import ProjectList from "../ProjectList";
import { projects } from "@/utils/data";
import FavouriteList from "../FavouriteList";

const ProjectSection = () => {
  const [favouriteProjects, setFavouriteProjects] = useState<string[]>([]);

  const handleFavouriteToggle = (id: string) => {
    setFavouriteProjects((prevFavourites) =>
      prevFavourites.includes(id)
        ? prevFavourites.filter((favId) => favId !== id)
        : [...prevFavourites, id]
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
      <FavouriteList favouriteIds={favouriteProjects} projects={projects} />
    </section>
  );
};

export default ProjectSection;
