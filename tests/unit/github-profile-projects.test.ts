import { readFileSync } from "node:fs"
import { resolve } from "node:path"

import { parseGithubProfileProjects } from "../../src/lib/github-profile-projects"

const readmeFixture = readFileSync(
  resolve(process.cwd(), "tests/fixtures/github-profile-readme.md"),
  "utf8"
)

describe("parseGithubProfileProjects", () => {
  it("parses the current profile README table shape", () => {
    const projects = parseGithubProfileProjects(readmeFixture)

    expect(projects).toHaveLength(6)
    expect(projects[0]).toEqual({
      slug: "event-union",
      name: "Event Union",
      summary:
        "A .NET8 WebAPI that demonstrates the value of Vertical Slice Architecture on handling an Event Management Domain.",
      techStack: [".NET 8", "PostgreSQL", "B4F"],
      githubUrl: "https://github.com/dante-escame/event-union-backend",
      group: "github",
    })
  })

  it("ignores markdown content outside the target section", () => {
    const projects = parseGithubProfileProjects(`
## Another Projects Table

| Project | Description | Tech Stack | Link |
|---------|-------------|------------|------|
| **Noise** | Should not be parsed. | TypeScript | [GitHub](https://example.com/noise) |

${readmeFixture}
`)

    expect(projects).toHaveLength(6)
    expect(projects.some((project) => project.name === "Noise")).toBe(false)
  })

  it("returns a safe fallback on malformed or missing table content", () => {
    expect(parseGithubProfileProjects("## 🏆 My Best Personal Projects")).toEqual([])
    expect(
      parseGithubProfileProjects(`
## 🏆 My Best Personal Projects

| Project | Description | Tech Stack | Link |
| invalid separator |
| Broken | Missing cells |
`)
    ).toEqual([])
  })
})
