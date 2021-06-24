import React from "react";

export default function projectCard({ project }) {

  return (

    <div className='hover:cursor-pointer hover:py-16 hover:m-0 my-5  bg-main_container_cream p-10 rounded-xl'>
        {/* Image div */}
        <div className="w-auto grid justify-items-center ">
        <h4 className="font-bold text-xl underline p-6 text-purple-900 ">{project.name}</h4>
        <video autoPlay loop muted className="grid justify-items-center rounded-lg  ">
            <source src={project.imageUrl} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
        <hr />
     


        {/* Title/Name div */}
        <div className="p-5 ">
            
            {project.projectDescription}
        </div>


        {/* description div */}
        <div className="">
            {/* {project.projectDescription} */}
        </div>
        
        
        {/* URL div */}
        <div></div>

  </div>
      )
}
