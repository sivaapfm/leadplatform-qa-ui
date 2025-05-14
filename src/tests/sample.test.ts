import { test, expect } from '@playwright/test';

test.describe('Launch URL Test', () => {
  test('should open the application and verify title', async ({ page }) => {
    // Navigate to the URL
    await page.goto('https://example.com');

    // Assert the title of the page
    await expect(page).toHaveTitle(/Example Domain/);

    // Take a screenshot
    await page.screenshot({ path: 'example-page.png', fullPage: true });

    console.log('Page launched and title verified successfully.');
  });
});
