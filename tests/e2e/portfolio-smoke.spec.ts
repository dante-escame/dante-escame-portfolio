import { expect, test } from "@playwright/test"

test("moves through the intro, who-am-i page, and projects page", async ({
  page,
}) => {
  await page.goto("/")

  await expect(
    page.getByRole("button", { name: "Play" })
  ).toBeEnabled({ timeout: 10_000 })
  await page.getByRole("button", { name: "Play" }).click()

  await page.waitForURL("**/who-am-i")
  await expect(
    page.getByText("Senior Software Engineer", { exact: true })
  ).toBeVisible()

  await page.getByRole("link", { name: "View my projects" }).click()

  await page.waitForURL("**/projects")
  await expect(
    page.getByRole("heading", { name: "Featured Projects" })
  ).toBeVisible()
})
