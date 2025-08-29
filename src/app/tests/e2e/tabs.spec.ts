import { test, expect } from "@playwright/test";

test.describe("Accessible Tabs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("default tab is account", async ({ page }) => {
    await expect(page.getByRole("tab", { name: "Account" })).toBeVisible();
    await expect(page.getByText("Update your account information here.")).toBeVisible();
    await expect(page.getByText("Change your password securely.")).not.toBeVisible();
  });

  test("switch to password tab", async ({ page }) => {
    await page.getByRole("tab", { name: "Password" }).click();
    await expect(page.getByText("Change your password securely.")).toBeVisible();
    await expect(page.getByText("Update your account information here.")).not.toBeVisible();
  });

  test("keyboard navigation works", async ({ page }) => {
    const firstTab = page.getByRole("tab", { name: "Account" });
    await firstTab.focus();
    await page.keyboard.press("ArrowRight");
    await expect(page.getByRole("tab", { name: "Password" })).toBeFocused();
  });
});
