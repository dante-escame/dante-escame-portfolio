import { render, screen } from "@testing-library/react"

import ProjectsPage from "../../app/(portfolio)/projects/page"

vi.mock("../../src/lib/github-profile-projects", () => ({
  githubProjectsRevalidateSeconds: 21600,
  getGithubProfileProjects: vi.fn(),
}))

const { getGithubProfileProjects } = await import(
  "../../src/lib/github-profile-projects"
)

describe("ProjectsPage", () => {
  it("renders featured items and parsed GitHub items", async () => {
    vi.mocked(getGithubProfileProjects).mockResolvedValue({
      projects: [
        {
          slug: "event-union",
          name: "Event Union",
          summary: "A featured architecture project.",
          techStack: [".NET 8", "PostgreSQL"],
          githubUrl: "https://github.com/dante-escame/event-union-backend",
          group: "github",
        },
        {
          slug: "evently",
          name: "Evently",
          summary: "A featured modular monolith project.",
          techStack: [".NET 8", "CQRS"],
          githubUrl: "https://github.com/dante-escame/evently-modular-monolith",
          group: "github",
        },
        {
          slug: "readbot",
          name: "ReadBot",
          summary: "A featured Discord bot project.",
          techStack: ["Java", "Bot"],
          githubUrl: "https://github.com/dante-escame/discord-read-bot",
          group: "github",
        },
        {
          slug: "dfs-and-bfs",
          name: "DFS and BFS",
          summary: "DFS and BFS algorithms for traversing graphs in Python.",
          techStack: ["Python", "Graphs"],
          githubUrl: "https://github.com/dante-escame/dfs-bfs-implementation",
          group: "github",
        },
      ],
      error: null,
    })

    render(await ProjectsPage())

    expect(
      screen.getByRole("heading", { name: "Featured Projects" })
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Event Union" })).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: "Live public project feed" })
    ).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "DFS and BFS" })).toBeInTheDocument()
  })

  it("renders the fallback GitHub state when upstream fetch fails", async () => {
    vi.mocked(getGithubProfileProjects).mockResolvedValue({
      projects: [],
      error: "The GitHub project feed is temporarily unavailable.",
    })

    render(await ProjectsPage())

    expect(
      screen.getByText(
        "Featured projects are temporarily unavailable because the GitHub project feed could not be loaded."
      )
    ).toBeInTheDocument()
    expect(screen.getByText("Feed unavailable")).toBeInTheDocument()
    expect(
      screen.getByText("The GitHub project feed is temporarily unavailable.")
    ).toBeInTheDocument()
  })
})
