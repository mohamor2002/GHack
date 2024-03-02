import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ArticleCard from '../components/ArticleCard'
import { NavLink } from 'react-router-dom'
import PodcastCard from '../components/PodcastCard'

const Resources = () => {
  const [activeTab, setActiveTab] = useState('inProgress')

  const articles = [
    {
        title: "Tech Innovations Inc.",
        description: "Dive into the world of finance with expert insights and actionable strategy Dive into the world of finance with expert insights and actionable strategies to achieve financial successies to achieve financial success success success success",
        valuation: 5000000,
        investors: 20,
        target: 2000000,
        keywords: ["technology", "startup", "AI", "investment"]
    },
    {
        title: "Green Energy Solutions Ltd.",
        description: "Dive into the world of finance with expert insights and actionable strategy Dive into the world of finance with expert insights and actionable strategies to achieve financial successies to achieve financial success success success success",
        valuation: 3000000,
        investors: 15,
        target: 1500000,
        keywords: ["energy", "environment", "renewable", "investment"]
    },
    {
        title: "HealthTech Innovations LLC",
        description: "Dive into the world of finance with expert insights and actionable strategy Dive into the world of finance with expert insights and actionable strategies to achieve financial successies to achieve financial success success success success",
        valuation: 7000000,
        investors: 25,
        target: 3000000,
        keywords: ["healthcare", "technology", "startup", "investment"]
    }
];
  return (
    <div className=' '>
        <Navbar></Navbar>
        <div className=' w-full  mb-2 px-20'>

             <div className="flex flex-row justify-start mb-2 mt-4">

                  <NavLink className="mr-12" onClick={() => setActiveTab('inProgress')}>
                     Articles
                  </NavLink>

                  <NavLink className="" onClick={() => setActiveTab('completed')}>
                      Podcast
                 </NavLink>

              </div>
              <div className='relative'>
                
                 {activeTab ==='inProgress' && <div className='absolute top-0 left-0 w-[7.5%] h-full bg-main-blue'></div>}
                 {activeTab ==='completed' &&<div className='absolute top-0 left-24 w-[7.5%] h-full bg-main-blue'></div>}

                  <div className='w-full h-full border-solid border-main-blue border-t-2 border-opacity-20'></div>
              </div>



        </div>
        {activeTab=='inProgress'&&
          <div className=' grid grid-cols-3 gap-y-4 px-16 mb-4 '>
            {
                articles.map((a)=><ArticleCard title={a.title} description={a.description} keywords={a.keywords} />       
                )
            }
         </div>}
         {activeTab!=='inProgress'&&
          <div className=' grid grid-cols-3 gap-y-4 px-16 mb-4 '>
            {
                articles.map((a)=><PodcastCard title={a.title} description={a.description} keywords={a.keywords} />       
                )
            }
         </div>}

    </div>
  )
}
export default Resources