import ProjectSection from "@/components/ProjectSection";
import { projects } from "@/utils/data";

export default function Home() {
  
  return (
    <>
      <ProjectSection projects={projects} />
    </>
  );
}