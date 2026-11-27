import { test } from '../../fixtures/pages.fixture'
import { Usuarios } from '../../fixtures/usuarios'

test('Login com sucesso', async ({ loginPage }) => {
  await loginPage.open()
  await loginPage.realizarLogin(Usuarios.valido)
})