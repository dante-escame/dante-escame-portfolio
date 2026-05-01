import { CyberBadge } from "../../../src/components/cyber-badge"
import { CyberTag } from "../../../src/components/cyber-tag"
import { DigitalRainBackground } from "../../../src/components/digital-rain-background"
import { AnimatedSignalTitle } from "../../../src/components/animated-signal-title"
import { StylePanel, StylePanelHeader } from "../../../src/components/style-kit"
import { getGithubProfileProjects } from "../../../src/lib/github-profile-projects"
import { buildFeaturedProjects } from "../../../src/lib/projects"

import { ProjectCard } from "./_components/project-card"

export const revalidate = 21600

const featuredProjectSlugs = ["event-union", "evently", "readbot"] as const

export default async function ProjectsPage() {
  const { projects: githubProjects, error: githubProjectsError } =
    await getGithubProfileProjects()
  const featuredProjects = buildFeaturedProjects(
    githubProjects,
    [...featuredProjectSlugs]
  )
  const featuredProjectSlugSet = new Set(featuredProjects.map((project) => project.slug))
  const remainingGithubProjects = githubProjects.filter(
    (project) => !featuredProjectSlugSet.has(project.slug)
  )

  return (
    <main className="min-h-screen overflow-x-hidden text-(--color-text)">
      <section className="background-page-shell isolate mx-auto min-h-[calc(100vh-53px)] w-full max-w-7xl px-6 py-10 md:px-10 md:py-12">
        <div className="portfolio-background-layer" aria-hidden="true">
          <div className="intro-loading-grid portfolio-background-grid background-page-grid" />
          <DigitalRainBackground className="intro-falling-numbers portfolio-falling-numbers" />
          <div className="intro-loading-noise portfolio-background-noise background-page-noise" />
        </div>
        <div className="background-page-orb background-page-orb-left" aria-hidden="true" />
        <div className="background-page-orb background-page-orb-right" aria-hidden="true" />

        <div className="relative z-10 space-y-6 py-4 md:space-y-8 md:py-8">
          <div className="flex flex-wrap items-center gap-3">
            <CyberBadge variant="cyan">Projects</CyberBadge>
            <CyberTag variant="pink">My Projects</CyberTag>
            <CyberTag variant="gold">Curated</CyberTag>
            <CyberTag variant="gold">Live</CyberTag>
          </div>

          <section aria-labelledby="featured-work-title" className="space-y-4">
            <StylePanel className="space-y-6 p-5 md:p-8">
              <StylePanelHeader
                eyebrow="Featured Work"
                title="Featured Projects"
                titleNode={
                  <AnimatedSignalTitle
                    as="h2"
                    className="text-2xl"
                    title="Featured Projects"
                  />
                }
                titleAs="h2"
                descriptionClassName="w-full max-w-none"
                description="These cards are selected from the GitHub project feed by slug, so this section stays curated without maintaining a separate content source."
              />

              {featuredProjects.length > 0 ? (
                <div className="grid gap-4 lg:grid-cols-3">
                  {featuredProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              ) : (
                <div
                  className="rounded-none border border-(--color-border) bg-(--color-accent)/8 px-4 py-4 text-sm leading-7 text-(--color-text)/84"
                  role="status"
                >
                  Featured projects are temporarily unavailable because the GitHub
                  project feed could not be loaded.
                </div>
              )}
            </StylePanel>
          </section>

          <section aria-labelledby="from-github-title" className="space-y-4">
            <StylePanel className="space-y-6 p-5 md:p-8" tone="cyan">
              <StylePanelHeader
                eyebrow="From GitHub"
                title="Live public project feed"
                titleNode={
                  <AnimatedSignalTitle
                    as="h2"
                    className="text-2xl"
                    delay={0.08}
                    title="Live public project feed"
                  />
                }
                titleAs="h2"
                tone="cyan"
                descriptionClassName="w-full max-w-none"
                description="All of the data in this page is being dinamically fetched from my Github!"
              />

              {remainingGithubProjects.length > 0 ? (
                <div className="grid gap-4 lg:grid-cols-2">
                  {remainingGithubProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              ) : (
                <div
                  className="rounded-none border border-(--color-border-cyan) bg-(--color-cyan)/6 px-4 py-4 text-sm leading-7 text-(--color-text)/84"
                  role="status"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <CyberBadge variant="cyan">Feed unavailable</CyberBadge>
                    <span>
                      {githubProjectsError ??
                        "GitHub projects could not be loaded right now."}
                    </span>
                  </div>
                </div>
              )}
            </StylePanel>
          </section>
        </div>
      </section>
    </main>
  )
}
