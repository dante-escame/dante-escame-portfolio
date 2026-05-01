export type ProjectGroup = "featured" | "github"

export interface PortfolioProject {
  slug: string
  name: string
  summary: string
  techStack: string[]
  githubUrl: string
  group: ProjectGroup
  featured?: boolean
}

export function buildFeaturedProjects(
  projects: PortfolioProject[],
  featuredSlugs: string[]
): PortfolioProject[] {
  const projectMap = new Map(projects.map((project) => [project.slug, project]))

  return featuredSlugs.flatMap((slug) => {
    const project = projectMap.get(slug)

    if (!project) {
      return []
    }

    return [
      {
        ...project,
        group: "featured",
        featured: true,
      },
    ]
  })
}
