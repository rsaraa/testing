import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json';

test.beforeEach('open Browser', async ({ page }) => {
  await page.route('*/**/api/tags', async route =>{
    await route.fulfill({
      body: JSON.stringify(tags)
    })
  })
  await page.goto('https://conduit.bondaracademy.com/');
  await page.waitForTimeout(1000);
});

test('test1', async ({ page }) => {
  await expect(page.locator('.navbar-brand')).toHaveText('conduit');
});

test.afterEach('close Browser',async({page})=>{
  await page.close();
})
