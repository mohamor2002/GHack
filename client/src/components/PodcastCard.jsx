import React from 'react'

const PodcastCard = ({title,description,keywords}) => {
  return (
    <div className=' font-main md:w-[23rem] h-[30rem] flex flex-col bg-white px-6 shadow-lg py-4'>
        <div className=' flex-1 flex flex-col justify-between '>

            <div className=' font-bold text-lg'>
                {title}
            </div>
            <div className=' opacity-70 text-md'>
                {description}
            </div>
            
            <button className=' w-full bg-main-blue h-10 rounded-md text-white font-medium mt-4'>
                <p>Play Podcast</p>
            </button>
            <div className=' w-full h-[1px] bg-main-blue'></div>
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

export default PodcastCard