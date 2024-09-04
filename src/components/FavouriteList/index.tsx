import { ProjectType } from "@/utils/types";


type FavouriteListProps = {
  favouriteIds: string[];
  projects: ProjectType[];
};

const FavouriteList = ({ favouriteIds, projects }: FavouriteListProps) => {
  const favouriteProjects = projects.filter((project) =>
    favouriteIds.includes(project.id)
  );

  return favouriteProjects.length > 0 ? (
      <div data-testid="favourite-list" className="flex flex-col m-6">
      <h2 className="text-gray-200 max-w-fit text-center py-6 font-SansNarrow font-semi-bold text-lg md:text-2xl">
        Your favourites
      </h2>
      <ul className="max-w-sm">
        {favouriteProjects.map((project) => (
          <li key={project.id} data-testid="favourite-project"
            className="text-gray-200"
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default FavouriteList;