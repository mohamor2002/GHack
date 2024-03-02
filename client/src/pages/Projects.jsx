import React from "react";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import PracticeCard from "../components/PracticeCard";
const Projects = () => {
   const Cards = [
    {
      title: "No Cash Flow !",
      difficulty: "Easy",
      keywords: ["Python", "Finance"],
    },
    {
      title: "No Cash Flow !",
      difficulty: "Easy",
      keywords: ["Python", "Finance"],
    },
    {
      title: "No Cash Flow !",
      difficulty: "Easy",
      keywords: ["Python", "Finance"],
    },
    
  ];
  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-3 gap-4 p-10 bg-main-gray">
        {Cards.map((card, index) => (
          <ProjectCard 
            card={card}
          />
        ))}

      </div>
    </div>
  );
};

export default Projects;
