import { useState } from "react";

const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false); // starts as false to hide all but four projects, state should be passed to each project, if showAll, show all, else show only four
  const favouriteList: string[] = []
  
  return (
    <section datatest-id="project-section">
      <ProjectList />
      <ShowAllButton />
    </section>
  )
}


export default ProjectSection