import { portfolioData } from "@/data/portfolio";
import ProjectItem from "./project-card";
import SectionTitle from "../section-title";
import { ItemGroup } from "../ui/item";

export function ProjectGrid() {
  const projects = portfolioData.projects;

  return (
    <div className="mb-6">
      <SectionTitle title="projects" />

      <ItemGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </ItemGroup>
    </div>
  );
}
