import Project from "@/components/Project";
import { useState } from "react";

export default function Home() {
  
  const [showAll, setShowAll] = useState(false); // starts as false to hide all but four projects, state should be passed to each project, if showAll, show all, else show only four
  return (
    <>
      <section datatest-id="project-section">
        <ProjectList />
        <ShowAllButton />
      </section>
    </>
  );
}