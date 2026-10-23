import { test, expect } from '@playwright/test';

test('shows the Potion of the Week feature', async ({ page }) => {
  await page.goto('./');

  const featured = page.locator('.featured-potion');
  await expect(featured.getByText('Potion of the Week')).toBeVisible();
  await expect(featured.getByRole('heading', { name: 'Elixir of Eternal Focus' })).toBeVisible();
  await expect(featured.locator('.original-price')).toHaveText('40 gold');
  await expect(featured.locator('.sale-price')).toHaveText('34 gold');
  await expect(featured.getByRole('button', { name: 'Add to Order' })).toBeEnabled();
});
