import React from 'react'
import Navbar from '../components/Navbar'
import InvestmentCard from '../components/InvestmentCard'

const Investment = () => {

    const investmentOffers = [
        {
            title: "Tech Innovations Inc.",
            description: "Cutting-edge technology startup focusing on AI-driven solutions.",
            valuation: 5000000,
            investors: 20,
            target: 2000000,
            keywords: ["technology", "startup", "AI", "investment"]
        },
        {
            title: "Green Energy Solutions Ltd.",
            description: "Renewable energy company specializing in solar and wind power.",
            valuation: 3000000,
            investors: 15,
            target: 1500000,
            keywords: ["energy", "environment", "renewable", "investment"]
        },
        {
            title: "HealthTech Innovations LLC",
            description: "Revolutionary healthcare technology firm aiming to improve patient care.",
            valuation: 7000000,
            investors: 25,
            target: 3000000,
            keywords: ["healthcare", "technology", "startup", "investment"]
        }
    ];
  return (
    <div className=' w-full bg-main-gray'>
         <Navbar></Navbar>
         <h1 className='mt-12 mb-2 px-16 text-lg font-bold'>Featured Companies</h1>
         <div className=' grid grid-cols-3 gap-y-4 px-16 '>
            {
                investmentOffers.map((a)=><InvestmentCard title={a.title} description={a.description} valuation={a.valuation} investors={a.investors} target={a.target} keywords={a.keywords} />       
                )
            }
         </div>
         <h1 className='mt-12 mb-2 px-16 text-lg font-bold'>Recommended Companies</h1>
         <div className=' grid grid-cols-3 gap-y-4 px-16 '>
            {
                investmentOffers.map((a)=><InvestmentCard title={a.title} description={a.description} valuation={a.valuation} investors={a.investors} target={a.target} keywords={a.keywords} />       
                )
            }
         </div>
    </div>
  )
}

export default Investment