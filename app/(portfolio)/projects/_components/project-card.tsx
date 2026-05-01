import Link from "next/link"

import { AnimatedSignalTitle } from "../../../../src/components/animated-signal-title"
import { CyberBadge } from "../../../../src/components/cyber-badge"
import { CyberTag } from "../../../../src/components/cyber-tag"
import { StylePanel } from "../../../../src/components/style-kit"
import type { PortfolioProject } from "../../../../src/lib/projects"

type ProjectCardProps = {
  project: PortfolioProject
}

export function ProjectCard({ project }: ProjectCardProps) {
  const groupLabel = project.group === "featured" ? "Featured" : "GitHub"

  return (
    <StylePanel className="flex h-full flex-col gap-4 p-5 md:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          <CyberBadge variant={project.featured ? "gold" : "purple"}>
            {groupLabel}
          </CyberBadge>
          <AnimatedSignalTitle
            as="h3"
            className="text-lg tracking-[0.12em]"
            delay={0.04}
            title={project.name}
          />
        </div>
      </div>

      <p className="text-sm leading-7 text-(--color-text)/86">{project.summary}</p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <CyberTag key={`${project.slug}-${tech}`}>{tech}</CyberTag>
        ))}
      </div>

      <div className="mt-auto pt-2">
        <Link
          className="inline-flex items-center border border-(--color-cyan)/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-(--color-cyan) transition-all duration-200 hover:border-(--color-cyan) hover:bg-(--color-cyan)/8 hover:text-(--color-heading) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-cyan) focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-bg)"
          href={project.githubUrl}
          rel="noreferrer"
          target="_blank"
        >
          Open on GitHub
        </Link>
      </div>
    </StylePanel>
  )
}
