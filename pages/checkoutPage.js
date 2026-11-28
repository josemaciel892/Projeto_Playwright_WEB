import { expect } from '@playwright/test'
import { BasePage } from './BasePage'
import { CheckoutLocators } from '../locators/CheckoutLocators'

export class CheckoutPage extends BasePage {
  constructor(page) {
    super(page)
    this.locators = new CheckoutLocators(page)
  }

  async acessarShopFourGrid() {
    await this.locators.shopMenu.click()
    await this.locators.shopFourGridLink.click()
  }

  async selecionarProduto(indice = 1) {
    await this.locators.productLinks.nth(indice).click()
  }

  async adicionarProdutoAoCarrinho() {
    await this.locators.addToCartLink.click()
  }

  async validarProdutoAdicionado() {
    await expect(this.locators.successMessage).toBeVisible()
  }

  async acessarCheckout() {
    await this.locators.shopMenu.click()
    await this.locators.checkoutViewOneLink.click()
  }

  async preencherDadosCobranca(dados) {
    await this.locators.firstNameInput.fill(dados.firstName)
    await this.locators.lastNameInput.fill(dados.lastName)
    await this.locators.companyNameInput.fill(dados.companyName)
    await this.locators.emailInput.fill(dados.email)
    await this.locators.countrySelect.selectOption(dados.country)
    await this.locators.stateSelect.selectOption(dados.state)
    await this.locators.zipCodeInput.fill(dados.zipCode)
    await this.locators.addressInput.fill(dados.address)
    await this.locators.additionalNotesInput.fill(dados.additionalNotes)
  }

  async salvarEndereco() {
    await this.locators.saveAddressCheckbox.check()
  }

  async selecionarPagamentoPaypal() {
    await this.locators.paypalRadio.check()
  }

  async salvarDadosCheckout() {
    await this.locators.saveButton.click()
  }

  async finalizarPedido() {
    await this.locators.placeOrderButton.click()
  }

  async validarPedidoRealizado() {
    await expect(this.locators.orderSuccessMessage).toBeVisible()
  }
}
