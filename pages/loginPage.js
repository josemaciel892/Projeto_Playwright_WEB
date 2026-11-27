import { expect } from '@playwright/test'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {
  constructor(page) {
    super(page)
    this.userInput = page.locator('#user')
    this.passwordInput = page.locator('#password')
    this.loginButton = page.getByRole('button', { name: 'login' })
    this.successMessage = page.getByText('Login realizado')
    this.okButton = page.getByRole('button', { name: 'OK' })
  }
    
  async open() {
    await this.goto('login')
  }

  async preencherCredenciais(email, senha) {
    await this.userInput.fill(email)
    await this.passwordInput.fill(senha)
    await this.loginButton.click()
  }

  async confirmarLoginRealizado() {
    await expect(this.successMessage).toBeVisible()
    await this.okButton.click()
  }

  async realizarLogin(usuario) {
    await this.preencherCredenciais(usuario.email, usuario.senha)
    await this.confirmarLoginRealizado()
  }
}