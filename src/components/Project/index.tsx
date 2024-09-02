import React, { useState } from 'react';
import { ProjectType } from '@/utils/types' 


const Project = ({title, imgSrc, alt, description, githubLink, websiteLink}: ProjectType) => {
  const [favourite, setFavourite] = useState(false);

  const handleFavoriteClick = () => {
    setFavourite(!favourite);
    // Handle the logic for updating the favorite status
  };

  return (
    <div>
      <h1>{title}</h1>
      <img src={imgSrc} alt={alt} />
      <p>{description}</p>
      <a href={githubLink}>GitHub</a>
      <a href={websiteLink}>Website</a>
      <button
        onClick={handleFavoriteClick}
        className={favourite ? 'text-yellow-500' : 'text-gray-400'}
        data-testid="heart-button"
      >
       {/* get heart symbol styled with text color  */}
      </button>
    </div>
  );
};

export default Project;
