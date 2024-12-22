const { test, expect } = require('@playwright/test');
const loginPage = require('../../pages/loginPage');

test('ID-0000001 Check successful login', async ({ page }) => {
  const login = new loginPage(page);

  await login.navigate(); 
  await login.login('1193345034', 'Deltec8001661991*'); 

  await expect(page).toHaveURL(/dashboard/);
});

test('ID-0000002 Check invalid login', async ({ page }) => {
  const login = new loginPage(page);

  await login.navigate();
  await login.login('invalidUser', 'wrongPassword');
  
  await expect(login.wrongPassworMessage).toBeVisible();
  await expect(await login.getWrongPasswordMessage()).toContain('Por favor, introduzca un nombre de usuario y clave' +
    ' correctos. Observe que ambos campos pueden ser sensibles a mayúsculas.')
});
