/* // tests/example.spec.ts
import { test, expect } from '../utils/fixtures/pomFixtures';

test('user can log in and see dashboard', async ({ loginPage, dashboardPage }) => {

  //unutar testa se poziva ime klase samo i nista drugo
  await loginPage.login(process.env.LOGIN_USERNAME, process.env.LOGIN_PASSWORD);
  await dashboardPage.openUserMenu();

  await expect(dashboardPage.userMenu).toBeVisible();
});
 */


//Promjeniti naziv testa u smoke test jer je login samo dio flow-a 