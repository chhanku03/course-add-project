import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
        let courses=props.courses;
        let cotegory=props.cotegory;

        const [likedCourses,setLikedCourses]=useState([]);
        function getCourses(){
           if(cotegory==="All")
           {
            let allCourses= [];
            Object.values(courses).forEach(courseCotegory => {
                 courseCotegory.forEach(course => {
                  allCourses.push(course);  
                 }  )
            })
            return allCourses;
           }
           else {
            return courses[cotegory];
           }
          
        }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
         {
            getCourses().map((course) =>{
               return  <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            })
         }
    </div>
  )
}

export default Cards