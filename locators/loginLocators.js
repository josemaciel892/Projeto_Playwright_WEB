export class LoginLocators {
  constructor(page) {
    this.userInput = page.locator('#user')
    this.passwordInput = page.locator('#password')
    this.loginButton = page.getByRole('button', { name: 'login' })
    this.successMessage = page.getByText('Login realizado')
    this.okButton = page.getByRole('button', { name: 'OK' })
  }
}