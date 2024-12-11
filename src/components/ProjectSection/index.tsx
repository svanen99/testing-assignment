"use client";

import { useState } from "react";
import ProjectList from "../ProjectList";
import FavouriteList from "../FavoriteList";
import { ProjectType } from "@/utils/types";

type ProjectSectionProps = {
  projects: ProjectType[];
  onScrollToSection: (section: "projects") => void;
};

const ProjectSection = ({ projects, onScrollToSection }: ProjectSectionProps) => {
  const [favouriteProjects, setFavouriteProjects] = useState<string[]>([]);

  const handleFavouriteToggle = (id: string) => {
    setFavouriteProjects((prevFavourites) =>
      prevFavourites.includes(id)
        ? prevFavourites.filter((favId) => favId !== id)
        : [...prevFavourites, id]
    );
  };

  return (
    <section
      data-testid="project-section"
      className="flex flex-col justify-center md:p-14 bg-white"
    >
      <h2 
        className="text-pink-400 bg-white border-pink-400 border-2 text-center rounded py-6 font-SansNarrow font-semibold text-lg md:text-2xl sticky top-[0] z-10 md:py-12 md:top-[61px] cursor-pointer hover:text-amber-500 transition-all"
        onClick={() => onScrollToSection("projects")}
      >
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