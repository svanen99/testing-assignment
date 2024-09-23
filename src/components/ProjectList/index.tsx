import Project from "../Project";
import { ProjectType } from "@/utils/types"
import { useState } from "react"

type ProjectListProps = {
    projectItems: ProjectType[];
    onFavouriteToggle: (id: string) => void;
    favouriteProjects: string[]
}

const ProjectList = ({ projectItems, onFavouriteToggle, favouriteProjects}: ProjectListProps ) => {
    
}

export default ProjectList;