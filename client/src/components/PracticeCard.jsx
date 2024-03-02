import React from 'react';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
const PracticeCard = ({card}) => {
  return (
    <div className=' p-5 m-5 bg-white w-[100%] shadow-md '>
      
       <p className='font-gray text-gray-400 mb-4'>Practice</p>
       <h1 className='font-bold mb-3 text-xl '> Finance IQ</h1>
       <h2 className='font-light text-xl  mb-5'>{card.explain}</h2>
       <button className=" w-[50%] bg-main-green hover:bg-main-green-700 text-white font-bold py-2 px-4 rounded mb-4">Ready For Practice</button>
       <div className='bg-gray-50 border-t-2 border-gray-300 mb-6'></div>

      <div className='flex justify-between'>
      <ul className='flex justify-start '>
        {card.keywords.map((keyword, index) => (
          <li className=' rounded-full text-sm bg-gray-300 m-1 pt-1 pb-1 pl-5 pr-5'key={index}>{keyword}</li>
        ))}
      </ul>

        <button className=" bg-main-blue hover:bg-black-700 text-white font-bold px-4 rounded">Start</button>
      </div>
      



    </div>
  );
}

export default PracticeCard;
