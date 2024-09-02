import React, { useState } from "react";
import { ProjectType } from "@/utils/types";


const Project = ({
  title,
  imgSrc,
  alt,
  description,
  githubLink,
  websiteLink,
}: ProjectType) => {
  const [favourite, setFavourite] = useState(false);

  const handleFavoriteClick = () => {
    setFavourite(!favourite);
    // Handle the logic for updating the favorite status
  };

  //NOTE: component needs uuid for testing because there are several favourite-btns 
  return (
    <div data-testid="project">
      <h3>{title}</h3>
      <img src={imgSrc} alt={alt} />
      <p>{description}</p>
      <a
        data-testid="github-link"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        data-testid="webstite-link"
        href={websiteLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Website
      </a>
      <button
        onClick={handleFavoriteClick}
        className={favourite ? "text-amber-500" : "text-gray-400"}
        data-testid="favourite-btn"
      >
        {/* get heart symbol styled with text color  */}
      </button>
    </div>
  );
};

export default Project;
