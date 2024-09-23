import { ProjectType } from "@/utils/types";
import Image from "next/image";

type ProjectProps = ProjectType & {
    onFavouriteToggle: (id: string) => void;
    isFavourite: boolean;
}

const Project = ({id, title, date, imgSrc, alt, description, githubLink, websiteLink, favourite}: ProjectProps) => {
    return (
        <div key={id} data-tesid="project">
            <div className="flex justify-center">
                <div>
                    <Image src={imgSrc} alt={alt} />
                </div>
            </div>
            <div className="flex flex-col flex-grow">
                <div>
                    <h3>{title}</h3>
                    <p>{date}</p>
                </div>
                <p>{description}</p>
            </div>
            <div>
                <a data-testid="github" href={githubLink}>
                See code in GitHub
                </a>
                <a data-testid="web" href={websiteLink}>
                Visit website
                </a>
            </div>
        </div>
    )
}

export default Project;