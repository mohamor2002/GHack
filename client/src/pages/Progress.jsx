import React, { useEffect, useState } from 'react'
import getCourses from '../api/getCourses'

const Progress = () => {
    const [courses,setCourses]=useState(null)
    useEffect(()=>{
        async function getCoursesEffect(){
            const results=await getCourses()
            setCourses(results)
        }
        getCoursesEffect()

    },[])
    console.log(courses)
  return (
    <div>
    </div>
  )
}

export default Progress