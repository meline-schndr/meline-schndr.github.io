import React from "react";

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  imageSrc,
  altText,
  title,
}) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <a href={href}>
        <img className="card rounded-xl" src={imageSrc} alt={altText} />
      </a>
      <a href={href} className="mt-2 text-lg font-bold text-white no-underline">
        {title}
      </a>
    </div>
  );
};

export default ProjectCard;
