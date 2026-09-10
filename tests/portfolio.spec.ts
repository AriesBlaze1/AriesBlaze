import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('pages render, projects filter, unknown content stays unpublished', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const path of [
    '/',
    '/work',
    '/about',
    '/writing',
    '/lab',
    '/contact',
    '/work/spenddeck',
    '/work/velune',
    '/work/leadmap',
  ]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute('href');
    expect(new URL(canonical!).pathname).toBe(path);
  }
  await page.goto('/work');
  await page.getByRole('button', { name: /Under NDA/ }).click();
  await expect(
    page.getByRole('heading', { name: 'Selected work under NDA.' }),
  ).toBeVisible();
  await page.getByRole('button', { name: /Products/ }).click();
  await expect(page.locator('.project-card')).toHaveCount(10);
  expect((await page.goto('/work/not-a-project'))?.status()).toBe(404);
  expect((await page.goto('/work/nextfind'))?.status()).toBe(404);
  expect((await page.goto('/writing/not-published'))?.status()).toBe(404);
  expect(errors).toEqual([]);
});

test('requested viewport widths do not overflow', async ({ page }) => {
  for (const width of [320, 360, 375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      '/',
      '/work',
      '/about',
      '/lab',
      '/writing',
      '/contact',
      '/work/spenddeck',
    ]) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `${path} overflows at ${width}`,
      ).toBe(true);
    }
  }
});

test('mobile navigation supports keyboard, escape, and route selection', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Menu' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(page.getByRole('button', { name: 'Menu' })).toBeFocused();
  await page.getByRole('button', { name: 'Menu' }).click();
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: /About/ })
    .click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect(
    await page
      .locator('html')
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe('auto');
});

test('key pages pass automated WCAG checks and images load', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const path of [
    '/',
    '/work',
    '/about',
    '/writing',
    '/lab',
    '/contact',
    '/work/spenddeck',
  ]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(results.violations, `${path} accessibility violations`).toEqual([]);
  }
  await page.goto('/');
  for (const image of await page.locator('.project-media img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() => image.evaluate((el) => (el as HTMLImageElement).naturalWidth))
      .toBeGreaterThan(0);
  }
});

test('SEO endpoints and legacy redirects are available', async ({
  request,
}) => {
  for (const path of [
    '/sitemap.xml',
    '/robots.txt',
    '/manifest.webmanifest',
    '/opengraph-image',
    '/icon.svg',
  ])
    expect((await request.get(path)).status()).toBe(200);
  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect(sitemap).toContain('/work/spenddeck');
  expect(sitemap).not.toContain('not-published');
  const redirect = await request.get('/project.html', { maxRedirects: 0 });
  expect(redirect.status()).toBe(308);
  expect(redirect.headers().location).toBe('/work');
});
