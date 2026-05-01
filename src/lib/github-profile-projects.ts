import type { PortfolioProject } from "./projects"

const PROFILE_README_URL =
  "https://raw.githubusercontent.com/dante-escame/dante-escame/main/README.md"

const PROFILE_SECTION_HEADING = "My Best Personal Projects"

export const githubProjectsRevalidateSeconds = 60 * 60 * 6

type GithubProjectsResult = {
  projects: PortfolioProject[]
  error: string | null
}

function slugifyProjectName(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function stripMarkdownFormatting(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function extractHref(value: string) {
  const htmlLinkMatch = value.match(/href=["']([^"']+)["']/i)

  if (htmlLinkMatch) {
    return htmlLinkMatch[1]
  }

  const markdownLinkMatch = value.match(/\[[^\]]+\]\(([^)]+)\)/)

  if (markdownLinkMatch) {
    return markdownLinkMatch[1]
  }

  const directUrlMatch = value.match(/https?:\/\/\S+/)

  return directUrlMatch?.[0] ?? null
}

function splitMarkdownTableRow(row: string) {
  return row
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim())
}

function extractProjectsSection(markdown: string) {
  const headingMatch = markdown.match(
    new RegExp(`^##\\s+.*${PROFILE_SECTION_HEADING}.*$`, "im")
  )

  if (!headingMatch || headingMatch.index === undefined) {
    return null
  }

  const sectionStart = headingMatch.index + headingMatch[0].length
  const remainingContent = markdown.slice(sectionStart)
  const nextHeadingMatch = remainingContent.match(/^##\s+/m)

  if (!nextHeadingMatch || nextHeadingMatch.index === undefined) {
    return remainingContent
  }

  return remainingContent.slice(0, nextHeadingMatch.index)
}

export function parseGithubProfileProjects(markdown: string): PortfolioProject[] {
  const section = extractProjectsSection(markdown)

  if (!section) {
    return []
  }

  const tableLines = section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|"))

  if (tableLines.length < 3) {
    return []
  }

  const [, separatorLine, ...rows] = tableLines

  if (!/^(\|\s*[-:]+\s*)+\|?$/.test(separatorLine)) {
    return []
  }

  const projects: PortfolioProject[] = []

  rows.forEach((row) => {
    const [projectCell, descriptionCell, techStackCell, linkCell] =
      splitMarkdownTableRow(row)

    if (!projectCell || !descriptionCell || !techStackCell || !linkCell) {
      return
    }

    const name = stripMarkdownFormatting(projectCell)
    const githubUrl = extractHref(linkCell)

    if (!name || !githubUrl) {
      return
    }

    projects.push({
      slug: slugifyProjectName(name),
      name,
      summary: stripMarkdownFormatting(descriptionCell),
      techStack: techStackCell
        .split(",")
        .map((item) => stripMarkdownFormatting(item))
        .filter(Boolean),
      githubUrl,
      group: "github",
    })
  })

  return projects
}

export async function getGithubProfileProjects(
  fetchImpl: typeof fetch = fetch
): Promise<GithubProjectsResult> {
  try {
    const response = await fetchImpl(PROFILE_README_URL, {
      next: {
        revalidate: githubProjectsRevalidateSeconds,
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub README request failed with ${response.status}`)
    }

    const readme = await response.text()
    const projects = parseGithubProfileProjects(readme)

    if (projects.length === 0) {
      return {
        projects: [],
        error: "The GitHub project feed is temporarily unavailable.",
      }
    }

    return {
      projects,
      error: null,
    }
  } catch (error) {
    console.error("Failed to fetch GitHub profile projects:", error)

    return {
      projects: [],
      error: "The GitHub project feed is temporarily unavailable.",
    }
  }
}
