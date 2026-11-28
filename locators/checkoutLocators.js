export class CheckoutLocators {
  constructor(page) {
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
}