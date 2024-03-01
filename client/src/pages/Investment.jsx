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
        },
        {
            title: "Eco-Friendly Products Co.",
            description: "Manufacturer of sustainable and eco-friendly consumer goods.",
            valuation: 2000000,
            investors: 10,
            target: 1000000,
            keywords: ["sustainability", "consumer", "goods", "investment"]
        },
        {
            title: "Fintech Solutions Ltd.",
            description: "Innovative financial technology company disrupting traditional banking.",
            valuation: 4000000,
            investors: 18,
            target: 2500000,
            keywords: ["fintech", "finance", "startup", "investment"]
        },
        {
            title: "Urban Mobility Tech Inc.",
            description: "Developer of smart transportation solutions for urban areas.",
            valuation: 6000000,
            investors: 22,
            target: 3500000,
            keywords: ["transportation", "technology", "startup", "investment"]
        },
        {
            title: "AgriTech Innovations Ltd.",
            description: "Pioneering agricultural technology firm improving farming practices.",
            valuation: 4500000,
            investors: 17,
            target: 2800000,
            keywords: ["agriculture", "technology", "startup", "investment"]
        },
        {
            title: "EdTech Solutions Inc.",
            description: "Provider of educational technology solutions for schools and universities.",
            valuation: 5500000,
            investors: 21,
            target: 3200000,
            keywords: ["education", "technology", "startup", "investment"]
        },
        {
            title: "SpaceTech Ventures LLC",
            description: "Space exploration technology company pushing the boundaries of space travel.",
            valuation: 8000000,
            investors: 30,
            target: 4000000,
            keywords: ["space", "technology", "startup", "investment"]
        },
        {
            title: "Blockchain Innovations Ltd.",
            description: "Leader in blockchain technology solutions for various industries.",
            valuation: 6500000,
            investors: 27,
            target: 3800000,
            keywords: ["blockchain", "technology", "startup", "investment"]
        }
    ];
  return (
    <div className=' w-full bg-main-gray'>
         <Navbar></Navbar> 
         <div className=' grid grid-cols-3 gap-y-4 px-16 mt-12'>
            {
                investmentOffers.map((a)=><InvestmentCard title={a.title} description={a.description} valuation={a.valuation} investors={a.investors} target={a.target} keywords={a.keywords} />       
                )
            }
         </div>
    </div>
  )
}

export default Investment