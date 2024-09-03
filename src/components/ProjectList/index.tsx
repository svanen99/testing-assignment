import React from 'react'
import Project from '../Project'
import { projects } from '@/utils/data'
import { ProjectType } from '@/utils/types'

type ProjectListProps = {
  projectItems: ProjectType[]
}

const ProjectList = ({projectItems}:ProjectListProps) => {
  console.log(projects)
  return (
    <div>
      <div data-testid="project-list" className={`flex flex-wrap text-gray-200 ${projectItems.length % 4 === 0 ? "justify-center" : "justify-start"}`}>
        {projectItems && projectItems.map((item) => (
          <Project
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectList