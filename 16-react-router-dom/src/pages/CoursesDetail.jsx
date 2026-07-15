import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {

    const val = useParams()
    console.log(val.id);
    
  return (
    <div>
        <h1>{val.id} Courses Detail</h1>
    </div>
  )
}

export default CoursesDetail