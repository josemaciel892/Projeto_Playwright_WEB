import { expect } from '@playwright/test'
import { BasePage } from './BasePage'
import { LoginLocators } from '../locators/loginLocators'
export class LoginPage extends BasePage {
  constructor(page) {
    super(page)
    this.locators = new LoginLocators(page)
  }

  async open() {
    await this.goto('login')
  }

  async preencherCredenciais(email, senha) {
    await this.locators.userInput.fill(email)
    await this.locators.passwordInput.fill(senha)
    await this.locators.loginButton.click()
  }

  async confirmarLoginRealizado() {
    await expect(this.locators.successMessage).toBeVisible()
    await this.locators.okButton.click()
  }

  async realizarLogin(usuario) {
    await this.preencherCredenciais(usuario.email, usuario.senha)
    await this.confirmarLoginRealizado()
  }
}