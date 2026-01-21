"use client";

import { portfolioData } from "@/data/portfolio";
import ProjectCard from "./project-card";
import SectionTitle from "../section-title";
import { ItemGroup } from "../ui/item";
import ProjectCardTwo from "./project-card-two";
import { useState } from "react";
import IconButton from "../icon-button";
import {
  DashboardSquare01Icon,
  LeftToRightListDashIcon,
} from "@hugeicons/core-free-icons";
import { ShowMoreButton } from "../show-more-button";

interface ProjectGridProps {
  isHomepage: boolean;
}

export function ProjectGrid({ isHomepage }: ProjectGridProps) {
  const projects = portfolioData.projects;
  const partialProjects = projects.slice(0, 4);

  const [cardStyle, setCardStyle] = useState<"tile" | "large-icon">(
    "large-icon",
  );

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <SectionTitle title="projects" />

        <div className="space-x-1">
          <IconButton
            icon={LeftToRightListDashIcon}
            onClick={() => setCardStyle("tile")}
            variant={cardStyle === "tile" ? "outline" : "ghost"}
            className="cursor-auto"
          />
          <IconButton
            icon={DashboardSquare01Icon}
            onClick={() => setCardStyle("large-icon")}
            variant={cardStyle === "large-icon" ? "outline" : "ghost"}
            className="cursor-auto"
          />
        </div>
      </div>

      {cardStyle === "large-icon" ? (
        <ItemGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {(isHomepage ? partialProjects : projects).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </ItemGroup>
      ) : (
        <ItemGroup className="gap-3">
          {(isHomepage ? partialProjects : projects).map((project) => (
            <ProjectCardTwo key={project.id} {...project} />
          ))}
        </ItemGroup>
      )}

      {isHomepage && projects.length > 4 && (
        <ShowMoreButton redirectUrl="/projects" remainingItems={projects.length - 4} />
      )}
    </div>
  );
}
