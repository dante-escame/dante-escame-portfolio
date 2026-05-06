import { render, screen } from "@testing-library/react"

import MyBackgroundPage from "../../app/(portfolio)/my-background/page"

vi.mock("../../src/lib/background", () => ({
  getBackgroundTimelineItems: vi.fn(),
}))

vi.mock("../../app/(portfolio)/my-background/_components/background-timeline", () => ({
  BackgroundTimeline: ({
    items,
  }: {
    items?: Array<{ date: string; title: string; subtitle: string }>
  }) => (
    <section aria-label="Background timeline entries">
      {(items ?? []).map((item) => (
        <article key={`${item.date}-${item.title}`}>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </article>
      ))}
    </section>
  ),
}))

const { getBackgroundTimelineItems } = await import("../../src/lib/background")

describe("MyBackgroundPage", () => {
  it("renders the timeline heading and fetched entries", async () => {
    vi.mocked(getBackgroundTimelineItems).mockResolvedValue([
      {
        date: "2018 - 2020",
        title: "First Engineering Role",
        subtitle: "Backend Engineer",
        paragraphs: ["Built APIs and internal tooling."],
      },
      {
        date: "2020 - 2023",
        title: "Platform Growth Phase",
        subtitle: "Senior Full-stack Engineer",
        paragraphs: ["Led feature delivery across multiple products."],
      },
    ])

    render(await MyBackgroundPage())

    expect(
      screen.getByRole("heading", {
        name: "Welcome to my background timeline",
      })
    ).toBeInTheDocument()
    expect(screen.getByText("First Engineering Role")).toBeInTheDocument()
    expect(screen.getByText("Platform Growth Phase")).toBeInTheDocument()
    expect(
      screen.getByRole("region", { name: "Background timeline entries" })
    ).toBeInTheDocument()
  })

  it("falls back gracefully when the timeline source is empty", async () => {
    vi.mocked(getBackgroundTimelineItems).mockResolvedValue([])

    render(await MyBackgroundPage())

    expect(
      screen.getByRole("heading", {
        name: "Welcome to my background timeline",
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("region", { name: "Background timeline entries" })
    ).toBeInTheDocument()
  })
})
