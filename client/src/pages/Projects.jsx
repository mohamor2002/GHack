import React from "react";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
const Projects = () => {
   const Cards = [
    {
      Title: "No Cash Flow !",
      Difficulty: "Easy",
      keywords: ["Python", "Finance"],
    },
    {
      Title: "No Cash Flow !",
      Difficulty: "Easy",
      keywords: ["Python", "Finance"],
    },
    {
      Title: "No Cash Flow !",
      Difficulty: "Easy",
      keywords: ["Python", "Finance"],
    },
  ];
  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-3 gap-4 p-10 bg-main-gray">
        {Cards.map((card, index) => (
          <ProjectCard 
            title={card.Title}
            difficulty={card.Difficulty}
            keywords={card.keywords}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
