import portfolioProjects from "../data/portfolioProjects"
import ProjectCard from "../components/ProjectCard"







function PortfolioSection() {
    return (
        <div className="lg:grid gap-12 grid-cols-2 lg:mx-5 ">
            {/* map prject prtfolio */}

            {portfolioProjects.map((project)=>(
                <ProjectCard project={project} key={project.name}/>
            ))}
        </div>
    )
}

export default PortfolioSection
