import { expect } from '@playwright/test'

export class CheckoutPage {
  constructor(page) {
    this.page = page
    this.shopMenu = page.getByRole('link', { name: 'Shop ' })
    this.shopFourGridLink = page.getByRole('link', { name: 'Shop Four Grid' })
    this.productLinks = page.getByRole('link', { name: 'Product Product' })
    this.addToCartLink = page.getByRole('link', { name: 'Add To Cart' })
    this.successMessage = page.getByText('Success!')
    this.checkoutViewOneLink = page
      .getByRole('navigation')
      .getByRole('link', { name: 'Checkout View One' })
    this.firstNameInput = page.getByRole('textbox', { name: 'First name*' })
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name*' })
    this.companyNameInput = page.getByRole('textbox', { name: 'Company Name*' })
    this.emailInput = page.getByRole('textbox', { name: 'Email Addresse*' })
    this.countrySelect = page.getByLabel('Country*')
    this.stateSelect = page.getByLabel('State/City*')
    this.zipCodeInput = page.getByRole('textbox', { name: 'Zip Code*' })
    this.addressInput = page.getByRole('textbox', { name: 'Full Address*' })
    this.additionalNotesInput = page.getByRole('textbox', { name: 'Additional Notes*' })
    this.saveAddressCheckbox = page.getByRole('checkbox', { name: 'Save In Address Book' })
    this.paypalRadio = page.getByRole('radio', { name: 'Paypal' })
    this.saveButton = page.getByRole('button', { name: 'Save' })
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' })
    this.orderSuccessMessage = page.getByText('Order success!')
  }

  async acessarShopFourGrid() {
    await this.shopMenu.click()
    await this.shopFourGridLink.click()
  }

  async selecionarProduto(indice = 1) {
    await this.productLinks.nth(indice).click()
  }

  async adicionarProdutoAoCarrinho() {
    await this.addToCartLink.click()
  }

  async validarProdutoAdicionado() {
    await expect(this.successMessage).toBeVisible()
  }

  async acessarCheckout() {
    await this.shopMenu.click()
    await this.checkoutViewOneLink.click()
  }

  async preencherDadosCobranca(dados) {
    await this.firstNameInput.fill(dados.firstName)
    await this.lastNameInput.fill(dados.lastName)
    await this.companyNameInput.fill(dados.companyName)
    await this.emailInput.fill(dados.email)
    await this.countrySelect.selectOption(dados.country)
    await this.stateSelect.selectOption(dados.state)
    await this.zipCodeInput.fill(dados.zipCode)
    await this.addressInput.fill(dados.address)
    await this.additionalNotesInput.fill(dados.additionalNotes)
  }

  async salvarEndereco() {
    await this.saveAddressCheckbox.check()
  }

  async selecionarPagamentoPaypal() {
    await this.paypalRadio.check()
  }

  async salvarDadosCheckout() {
    await this.saveButton.click()
  }

  async finalizarPedido() {
    await this.placeOrderButton.click()
  }

  async validarPedidoRealizado() {
    await expect(this.orderSuccessMessage).toBeVisible()
  }
}
