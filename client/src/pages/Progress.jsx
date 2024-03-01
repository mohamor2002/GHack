import React, { useEffect, useState } from 'react'
import getCourses from '../api/getCourses'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import BoltIcon from '@mui/icons-material/Bolt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Progress = () => {
    const [courses,setCourses]=useState(null)
    const progress='30'
    const XP='250'
    const Total='2530'
    const user=useSelector(state=>state.data.user.user)
    useEffect(()=>{
        async function getCoursesEffect(){
            const results=await getCourses()
            setCourses(results)
        }
        getCoursesEffect()

    },[])
    console.log(courses)
  return (
    <div className=' w-full'>
        <Navbar></Navbar>
        <div className=' flex flex-col items-center pt-12 bg-main-gray font-main'>
            <div className=' w-[80%] bg-white shadow-md p-12 '>
                <div className='flex w-full items-center justify-between'>
                    <div className='flex space-x-4'>
                        <div className=' w-16 aspect-square rounded-full bg-gray-200'></div>
                        <div className='flex flex-col justify-center space-y-1'>
                            <h4 className=' text-lg font-medium'>
                                {user.username}
                            </h4>
                            <div className=' flex items-center space-x-4'>
                                <div className='bar h-[5px] w-24 bg-gray-200 rounded-full'>
                                    <div className={` bg-main-green h-full w-[${progress}%] rounded-full`}></div>
                                </div>
                                <p className=' text-xs font-medium text-gray-500'>
                                    portfolio {progress}% completed
                                </p>    
                            </div>

                        </div>

                    </div>
                    <button className=' w-60 h-12 bg-main-green text-lg text-black font-medium rounded-full'>
                        Daily Reviews
                    </button>
                </div>
                <div className=' w-full h-[1px] bg-main-blue opacity-40 mt-6'></div>
                <div className='grid grid-cols-2 py-2'>
                    <div className='flex justify-between items-center px-12 py-4 border-r-[1px] border-r-main-blue border-opacity-40'>
                        <div className='flex flex-col space-y-2'>
                            <p className=' text-sm text-[#112935] opacity-76 font-semibold'>Daily XP</p>
                            <p className='text-3xl font-medium'>{XP}</p>
                        </div>
                        <BoltIcon className=' text-main-green scale-[250%]'></BoltIcon>
                    </div>
                    <div className='flex justify-between items-center px-12 py-4'>
                        <div className='flex flex-col space-y-2'>
                            <p className=' text-sm text-[#112935] opacity-76 font-semibold'>Total XP</p>
                            <p className='text-3xl font-medium'>{Total}</p>
                        </div>
                        <EmojiEventsIcon className=' text-main-green scale-[250%]'></EmojiEventsIcon>
                    </div>
                    
                    

                </div>
                <div className=' w-full h-[1px] bg-main-blue opacity-40 '></div>
                <div className=' mx-24 grid grid-cols-3 mt-6'>
                    <div className=' flex flex-col justify-center items-center space-y-4'>
                        <p className=' text-main-blue text-3xl font-medium'>9</p>
                        <p>Courses Completed</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center space-y-4'>
                        <p className=' text-main-blue text-3xl font-medium'>0</p>
                        <p>Tracks Completed</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center space-y-4'>
                        <p className=' text-main-blue text-3xl font-medium'>12</p>
                        <p>Projects Completed</p>
                    </div>

                </div>
                <div className=' mt-12'>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Progress