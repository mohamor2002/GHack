import React from 'react'

const InvestmentCard = ({title,description,valuation,investors,target,keywords}) => {
  return (
    <div className=' font-main md:w-[23rem] h-[30rem] flex flex-col bg-white px-6 shadow-lg py-4'>
        <div className=' h-1/3'>

        </div>
        <div className=' flex-1 flex flex-col justify-between '>

            <div className=' font-bold text-lg'>
                {title}
            </div>
            <div className=' opacity-70 text-sm'>
                {description}
            </div>
            <div className=' grid grid-cols-3 font-semibold'>
                <div className=' flex flex-col space-y-4 justify-between items-center'>
                    <div>
                        Valuation
                    </div>
                    <div>
                        {valuation+' '} DA
                    </div>
                </div>
                <div className=' flex flex-col justify-between items-center'>
                    <div>
                        Investors
                    </div>
                    <div>
                        {investors}
                    </div>
                </div>
                <div className=' flex flex-col justify-between items-center'>
                    <div>
                        Target
                    </div>
                    <div>
                        {target+' '} DA
                    </div>
                </div>
            </div>
            <button className=' w-full bg-main-blue h-10 rounded-md text-white font-medium mt-4'>
                <p>Read More</p>
            </button>
            <div className=' w-full h-[1px] bg-main-blue my-2'></div>
            <div className=' flex flex-wrap font-medium'>
                {
                    keywords.map((k)=><div className=' bg-gray-200 px-4 py-1 rounded-full text-xs mr-2 mb-2'>{k}</div>
                    )
                }
               
            </div>
        </div>
        
    </div>
  )
}

export default InvestmentCard