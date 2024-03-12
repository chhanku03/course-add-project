import React from 'react'


const Filter = (props) => {
    let filterData=props.filterData;
    let cotegory=props.cotegory;
    let setCotegory=props.setCotegory;
    function filterHandler(title)
    {
        setCotegory(title);
    }
  return (
    <div className='flex flex-wrap w-11/12 max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center '>
       { filterData.map( (data) =>(
       <button className= {`text-lg px-2 py-1 rounded-md font-medium  border-white border-[2px] text-white bg-black hover:bg-opacity-50 transition-all duration-300
                  ${cotegory===data.title ? "bg-opacity-60 border-white ":"bg-opacity-40 border-transparent" }`}
        key={data.id }  onClick={()=>filterHandler(data.title)}>
            {data.title}

        </button>
      ) )}
    </div>
  )
}

export default Filter