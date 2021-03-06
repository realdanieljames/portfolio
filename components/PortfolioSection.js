import portfolioProjects from "../data/portfolioProjects";
import ProjectCard from "../components/ProjectCard";


function PortfolioSection() {
  return (
    <main className="bg-heading_blue pt-24">
      {/* =============== HEADING ================================= */}
      <div className="grid justify-items-center">
        <h1 className="text-3xl text-purple-700 font-semibold my-7">
          Popular Projects{" "}
        </h1>
      </div>

      <div className="grid  justify-items-center mt-17  mx-24 ">
        <div className="lg:grid gap-12 md:grid-cols-2 2xl:grid-cols-3 lg:mx-5 ">
          {/* map prject prtfolio */}

          {portfolioProjects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default PortfolioSection;
