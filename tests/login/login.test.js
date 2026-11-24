import { test } from '@playwright/test'
import { LoginPage } from '../../pages/loginPage'
import { Usuarios } from '../../fixtures/usuarios'

test('Login com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto()
  await loginPage.realizarLogin(Usuarios.valido)
})