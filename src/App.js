import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import {apiUrl, filterData} from "./data";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { toast } from "react-toastify";
 import Spinner from "./component/Spinner";
 import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
       
       const[courses,setCourses]=useState(null);
       const [loading,setLoading]=useState(true);
       const[cotegory,setCotegory]=useState(filterData[0].title);
           async function fetchData()
           {
              setLoading(true);
            try {
              let response=await fetch(apiUrl);
              let output=await response.json();
              setCourses(output.data);
              
            } catch (error) {
                toast.error("somthing went wronge");
              
            }
              setLoading(false);
           }

             useEffect(()=>{
               fetchData();
             },[])

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
            <ToastContainer/>
        <div>
        <Navbar/>
        </div>
          <div >
          <div>
        <Filter filterData={ filterData} cotegory={cotegory} setCotegory={setCotegory}
        />
        </div>
         <div className=" w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">
           {  loading ? (<Spinner/>):( <Cards courses={courses} cotegory={cotegory}/>)}
         </div>
          </div>
       
    </div>
  );
};

export default App;
