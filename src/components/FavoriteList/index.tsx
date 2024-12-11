import { ProjectType } from "@/utils/types";
import { HeartIcon } from "@heroicons/react/20/solid";

type FavouriteListProps = {
  favouriteIds: string[];
  projects: ProjectType[];
};

const FavouriteList = ({ favouriteIds, projects }: FavouriteListProps) => {
  const favouriteProjects = projects.filter((project) =>
    favouriteIds.includes(project.id)
  );

  return favouriteProjects.length > 0 ? (
    <div data-testid="favourite-list" className="flex flex-col p-4 md:p-8 bg-black text-gray-200 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl md:text-3xl text-pink-400 font-SansNarrow font-semibold mb-6">
        Your Favourites
      </h2>
      <ul className="space-y-4">
        {favouriteProjects.map((project) => (
          <li
            key={project.id}
            data-testid="favourite-project"
            className="flex items-center space-x-2 hover:text-pink-400"
          >
            <HeartIcon className="w-6 h-6 text-amber-500" />
            <a
              data-testid="website-link"
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              {project.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p className="text-center text-gray-200 mt-6">You have no favourites yet.</p>
  );
};

export default FavouriteList;