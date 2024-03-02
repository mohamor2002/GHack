import React from "react";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import PracticeCard from "../components/PracticeCard";
const Practice = () => {
   const Cards = [
    {
        title: "Finance IQ",
        explain: "Analytical Finance Assessment",
        keywords: ["Python", "Finance"],
      }, 
      {
        title: "Finacne Iq",
        explain: "Analytical Finance Assessment",
        keywords: ["Python", "Finance"],
      }, 
      {
        title: "Finance IQ",
        explain: "Analytical Finance Assessment",
        keywords: ["Python", "Finance"],
      },{
        title: "Finance IQ",
        explain: "Analytical Finance Assessment",
        keywords: ["Python", "Finance"],
      }, 
      {
        title: "Finacne Iq",
        explain: "Analytical Finance Assessment",
        keywords: ["Python", "Finance"],
      }, 
      {
        title: "Finance IQ",
        explain: "Analytical Finance Assessment",
        keywords: ["Python", "Finance"],
      },{
        title: "Finance IQ",
        explain: "Analytical Finance Assessment",
        keywords: ["Python", "Finance"],
      }, 
      {
        title: "Finacne Iq",
        explain: "Analytical Finance Assessment",
        keywords: ["Python", "Finance"],
      }, 
      {
        title: "Finance IQ",
        explain: "Analytical Finance Assessment",
        keywords: ["Python", "Finance"],
      }
   
];
    
  
  return (
    <div>
      <Navbar/>
      <div class="grid grid-cols-3 grid-rows-3 gap-4 p-10 bg-main-gray">
        {Cards.map((card, index) => (
          <PracticeCard
            card={card}
          />
        ))}


      </div>
    </div>
  );
};

export default Practice;
