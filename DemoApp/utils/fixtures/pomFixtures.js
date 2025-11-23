// fixtures/pom-fixtures.ts
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type POMFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
};

// extend base test with your own fixtures
export const test = base.extend<POMFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
});

export { expect };