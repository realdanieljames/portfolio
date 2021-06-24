import React from "react";

export default function projectCard({ project }) {

  return (

    <div className='hover:cursor-pointer my-5  bg-main_container_cream p-7 rounded-xl'>
        {/* Image div */}
        <div className="w-96">
        <h4 className="font-bold underline grid justify-items-center p-6 ">{project.name}</h4>
        <video autoPlay loop muted className="rounded-lg">
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
0