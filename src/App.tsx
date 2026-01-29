import React from "react";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

import githubIcon from "./assets/images/github.svg";
import spotifyIcon from "./assets/images/spotify.svg";
import discordIcon from "./assets/images/discord.svg";

const App: React.FC = () => {
  const projects = [
    {
      href: "https://github.com/meline-schndr",
      imageSrc: githubIcon,
      altText: "GitHub",
      title: "GitHub",
    },
    {
      href: "/spotify-player",
      imageSrc: spotifyIcon,
      altText: "Spotify",
      title: "Spotify player",
    },
    {
      href: "#",
      imageSrc: discordIcon,
      altText: "Discord",
      title: "Discord",
    },
  ];

  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "100vh", width: "100%" }}
    >
      <div
        id="widget-container"
        className="widget-background shadow-lg flex flex-col items-center w-auto"
      >
        <div className="text-xl font-bold text-white mb-4 w-full text-center">
          Dev projects
        </div>

        <div
          id="apps-container"
          className="flex flex-row items-center justify-evenly flex-wrap w-full gap-4"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              href={project.href}
              imageSrc={project.imageSrc}
              altText={project.altText}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
