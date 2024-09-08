import AboutMe from "@/components/About";
import ProjectSection from "@/components/ProjectSection";
import { projects, about  } from "@/utils/data";

export default function Home() {
  
  return (
    <>
      <AboutMe {...about}/>
      <ProjectSection projects={projects} />
    </>
  );
}