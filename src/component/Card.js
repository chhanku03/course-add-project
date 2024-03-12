import React from 'react'
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';
import { FcLikePlaceholder } from "react-icons/fc";

const Card = (props) => {
    let course=props.course;
    let setLikedCourses=props.setLikedCourses;
    let likedCourses=props.likedCourses;
      function clickHandler()
  {
        if(likedCourses.includes(course.id))
        {
          //agar pehle se like hui padi to remove kar do like ko
          setLikedCourses((prev) => prev.filter((cid)=> ( cid!==course.id)));
          toast.warning("Like Remove");
        }
        else{
          //pehle se like ni hai to liked add karna h or show karna h toast ko 
           if(likedCourses.length===0)
           {
            setLikedCourses([course.id]);
           }
           else{
             setLikedCourses((prev) => [...prev,course.id]);
           }
           toast.success("Like Successfully");
        }

  }
  return (
    <div className=' w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
          
             <div className='relative'>
                   <img src={course.image.url}  />
                
              


                 <div className='absolute w-[30x] h-[30px] bg-white rounded-full right-2 bottom-[-6px] grid place-items-center'>
                      <button onClick={clickHandler}>
                            {
                              likedCourses.includes(course.id) ? 
                                                   (<FcLike fontSize="1.75rem" />):
                               (<FcLikePlaceholder fontSize="1.75rem" />)

                            }
                       </button>
                   </div>
              </div>
                    
        

          <div className='text-white  p-4'>
              <p className='font-semibold text-lg leading-6'>{course.title} </p>
              <p className='mt-2'> {
              course.description.length>100 ? (course.description.substr(0,100)) +"...":(course.description) 
              }</p>
          </div>
           
    </div>
  )
}

export default Card