'use client'

import { useState } from "react";
import ProjectList from "../ProjectList";
import { projects } from "@/utils/data";

const ProjectSection = () => {
  // const [showAll, setShowAll] = useState(false); // starts as false to hide all but four projects, state should be passed to each project, if showAll, show all, else show only four
  const favouriteList: string[] = []
  
  return (
    <section datatest-id="project-section" className="md:p-14">
      <h2 className="text-gray-200 text-center py-6 font-SansNarrow font-semi-bold text-lg md:text-2xl">My Projects</h2>
      <ProjectList projectItems={projects}/>
      {/* <ShowAllButton /> */}
    </section>
  )
}


export default ProjectSection