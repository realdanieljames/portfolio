import React from "react";

export default function projectCard({ project }) {

  return (

    <div className='grid grid-rows-4 grid-flow-col'>
        {/* Image div */}
        <div className="w-96 mt-5">
        <video autoPlay loop muted className="rounded-lg">
            <source src={project.imageUrl} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>


        {/* Title/Name div */}
        <div className="">
            {project.name}
        </div>


        {/* description div */}
        <div className="">
            {project.projectDescription}
        </div>
        
        
        {/* URL div */}
        <div></div>

  </div>
      )
}
