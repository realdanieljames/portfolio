import portfolioProjects from "../data/portfolioProjects"
import ProjectCard from "../components/ProjectCard"

function PortfolioSection() {
    return (
        <div className="grid">
            {/* map prject prtfolio */}

            {portfolioProjects.map((project)=>(
                <ProjectCard project={project} key={project.name}/>
            ))}
        </div>
    )
}

export default PortfolioSection
