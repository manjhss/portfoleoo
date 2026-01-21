import { ProjectGrid } from "@/components/portfolio/project-grid";

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="m-6">
        <ProjectGrid isHomepage={false} />
      </div>
    </div>
  );
}
