import { CyberBadge } from "../../../src/components/cyber-badge"
import { CyberTag } from "../../../src/components/cyber-tag"
import { DigitalRainBackground } from "../../../src/components/digital-rain-background"
import { AnimatedSignalTitle } from "../../../src/components/animated-signal-title"
import { StylePanel, StylePanelHeader } from "../../../src/components/style-kit"
import { getGithubProfileProjects } from "../../../src/lib/github-profile-projects"
import { buildFeaturedProjects } from "../../../src/lib/projects"
import { getServerTranslation } from "../../../src/lib/i18n/server"

import { ProjectCard } from "./_components/project-card"

export const revalidate = 21600

const featuredProjectSlugs = ["event-union", "evently", "readbot"] as const

export default async function ProjectsPage() {
  const [{ projects: githubProjects, error: githubProjectsError }, t] = await Promise.all([
    getGithubProfileProjects(),
    getServerTranslation(),
  ])
  const featuredProjects = buildFeaturedProjects(
    githubProjects,
    [...featuredProjectSlugs]
  )
  const featuredProjectSlugSet = new Set(featuredProjects.map((project) => project.slug))
  const remainingGithubProjects = githubProjects.filter(
    (project) => !featuredProjectSlugSet.has(project.slug)
  )

  const p = t.projects

  return (
    <main className="min-h-screen overflow-x-hidden text-(--color-text)">
      <section className="relative isolate mx-auto min-h-[calc(100vh-53px)] w-full max-w-7xl px-6 py-10 md:px-10 md:py-12">
        <div className="portfolio-background-layer" aria-hidden="true">
          <div className="intro-loading-grid portfolio-background-grid" />
          <DigitalRainBackground className="intro-falling-numbers portfolio-falling-numbers" />
          <div className="intro-loading-noise portfolio-background-noise" />
        </div>
        <div className="ambient-orb ambient-orb-left" aria-hidden="true" />
        <div className="ambient-orb ambient-orb-right" aria-hidden="true" />

        <div className="relative z-10 space-y-6 py-4 md:space-y-8 md:py-8">
          <div className="flex flex-wrap items-center gap-3">
            <CyberBadge variant="cyan">{p.badge}</CyberBadge>
            <CyberTag variant="pink">{p.myProjectsBadge}</CyberTag>
            <CyberTag variant="gold">{p.curatedTag}</CyberTag>
            <CyberTag variant="gold">{p.liveTag}</CyberTag>
          </div>

          <section aria-labelledby="featured-work-title" className="space-y-4">
            <StylePanel className="space-y-6 p-5 md:p-8">
              <StylePanelHeader
                eyebrow={p.featuredEyebrow}
                title={p.featuredTitle}
                titleNode={
                  <AnimatedSignalTitle
                    as="h2"
                    className="text-2xl"
                    title={p.featuredTitle}
                  />
                }
                titleAs="h2"
                descriptionClassName="w-full max-w-none"
                description={p.featuredDesc}
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
                  {p.featuredError}
                </div>
              )}
            </StylePanel>
          </section>

          <section aria-labelledby="from-github-title" className="space-y-4">
            <StylePanel className="space-y-6 p-5 md:p-8" tone="cyan">
              <StylePanelHeader
                eyebrow={p.githubEyebrow}
                title={p.githubTitle}
                titleNode={
                  <AnimatedSignalTitle
                    as="h2"
                    className="text-2xl"
                    delay={0.08}
                    title={p.githubTitle}
                  />
                }
                titleAs="h2"
                tone="cyan"
                descriptionClassName="w-full max-w-none"
                description={p.githubDesc}
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
                    <CyberBadge variant="cyan">{p.feedUnavailable}</CyberBadge>
                    <span>
                      {githubProjectsError ?? p.githubError}
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
