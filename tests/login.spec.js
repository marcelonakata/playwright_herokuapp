// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
});

test('Test', async ({ page }) => {

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("The Internet");
});

test('Verify URL after succesful login', async ({ page }) => {

  // Type username.
  await page.locator('#username').type("tomsmith");

  // Type password.
  await page.locator('#password').type("SuperSecretPassword!");

  // Click on 'Login' butto.
  await page.locator('xpath=//*[@id="login"]/button/i').click();

  // Expects the URL to contain 'secure'.
  await expect(page).toHaveURL(/secure/);
});
