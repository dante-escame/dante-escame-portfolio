import { render, screen } from "@testing-library/react"

import { LocaleProvider } from "../../src/lib/i18n/context"
import { PortfolioTopNav } from "../../src/components/portfolio-top-nav"

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}))

const { usePathname } = await import("next/navigation")

describe("PortfolioTopNav", () => {
  it("shows Projects and highlights it on the projects route", () => {
    vi.mocked(usePathname).mockReturnValue("/projects")

    render(
      <LocaleProvider initialLocale="en">
        <PortfolioTopNav />
      </LocaleProvider>
    )

    const projectsLink = screen.getByRole("link", { name: "Projects" })

    expect(projectsLink).toBeInTheDocument()
    expect(projectsLink).toHaveAttribute("href", "/projects")
    expect(projectsLink).toHaveAttribute("aria-current", "page")
  })
})
