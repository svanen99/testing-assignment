import Project from '../Project'
import { ProjectType } from '@/utils/types'

type ProjectListProps = {
  projectItems: ProjectType[];
  onFavouriteToggle: (id: string) => void;
  favouriteProjects: string[];
}

const ProjectList = ({projectItems, onFavouriteToggle, favouriteProjects}:ProjectListProps) => {
  return (
    <div>
      <div data-testid="project-list" className={`flex flex-wrap text-gray-200 ${projectItems.length % 4 === 0 ? "justify-center" : "justify-start"}`}>
        {projectItems && projectItems.map((item) => (
          <Project
            key={item.id}
            {...item}
            onFavouriteToggle={onFavouriteToggle}
            isFavourite={favouriteProjects.includes(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectList