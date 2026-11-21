import { test } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { CheckoutPage } from '../pages/checkoutPage'
import { Usuarios } from '../fixtures/usuarios'
import { Checkout } from '../fixtures/checkout'

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto()
  await loginPage.realizarLogin(Usuarios.valido)
})

test('Selecao de produto', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page)

  await checkoutPage.acessarShopFourGrid()
  await checkoutPage.selecionarProduto(1)
  await checkoutPage.adicionarProdutoAoCarrinho()
  await checkoutPage.validarProdutoAdicionado()
})

test('Checkout com sucesso', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page)

  await checkoutPage.acessarCheckout()
  await checkoutPage.preencherDadosCobranca(Checkout.dadosValidos)
  await checkoutPage.salvarEndereco()
  await checkoutPage.selecionarPagamentoPaypal()
  await checkoutPage.salvarDadosCheckout()
  await checkoutPage.finalizarPedido()
  await checkoutPage.validarPedidoRealizado()
})