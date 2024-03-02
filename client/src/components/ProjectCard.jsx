import React from 'react';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
const ProjectCard = ({card}) => {
  return (
    <div className=' p-8 m-5 bg-white w-[100%] shadow-md'>
      <div className='flex justify-end'>
        <div className='bg-gray-100 rounded-full p-3 cursor-pointer'>
      <BookmarksOutlinedIcon  />
        </div>
      </div>
       <h1 className='font-semibold mb-3 text-xl '> Case Study Title</h1>
       <h1 className='text-main-blue mb-3 font-bold text-3xl bg-white'>{card.title}</h1>
       <h3 className='mb-1 text-xl font-semibold'>Difficulty</h3>
       <h2 className='font-semibold text-xl text-main-green mb-5'>{card.difficulty}</h2>
       <ul className='flex justify-start mb-10'>
        {card.keywords.map((keyword, index) => (
          <li className=' rounded-full text-sm bg-gray-300 m-1 pt-1 pb-1 pl-5 pr-5'key={index}>{keyword}</li>
        ))}
      </ul>
      <div className='flex justify-between'>
        <h1 className='font-bold text-2xl '>Exp: 1000</h1>
        <button className=" bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded">Details</button>
      </div>
    
    </div>
  );
}

export default ProjectCard;
