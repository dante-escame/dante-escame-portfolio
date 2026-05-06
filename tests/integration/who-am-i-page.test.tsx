import { render, screen } from "@testing-library/react"

import WhoAmIPage from "../../app/(portfolio)/who-am-i/page"

describe("WhoAmIPage", () => {
  it("renders the portfolio introduction and primary navigation actions", () => {
    render(<WhoAmIPage />)

    expect(screen.getByText("Senior Software Engineer")).toBeInTheDocument()
    expect(
      screen.getByText(/Senior Software Engineer with 6\+ years of experience/i)
    ).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: "Download My Resume" })
    ).toHaveAttribute("href", "/Profile.pdf")
    expect(
      screen.getByRole("link", { name: "View my projects" })
    ).toHaveAttribute("href", "/projects")
    expect(
      screen.getByRole("link", { name: "Visit LinkedIn" })
    ).toHaveAttribute("href", "https://www.linkedin.com/in/dante-escame/")
    expect(
      screen.getByRole("heading", { name: "What I Tend To Build Around" })
    ).toBeInTheDocument()
  })
})
