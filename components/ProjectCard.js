import React from "react";

export default function projectCard({ project }) {

  return (

    <div className='w-auto my-5 hover:cursor-pointer hover:shadow-lg bg-main_container_cream p-10 rounded-xl'>
        {/* Image div */}
        <div className="w-auto grid justify-items-center ">

        <h4 className="font-bold text-xl underline p-6 text-purple-900 ">{project.name}</h4>
        <video autoPlay loop muted className="grid justify-items-center rounded-lg md:p-0 ">
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
