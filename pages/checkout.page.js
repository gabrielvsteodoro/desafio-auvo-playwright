exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.zip = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn = page.locator('#finish');
  }

  async finalizarPedido(nome, sobrenome, cep) {
    // digita cada letra com delay de 200ms
    await this.firstName.type(nome, { delay: 200 });
    await this.lastName.type(sobrenome, { delay: 200 });
    await this.zip.type(cep, { delay: 200 });
    await this.continueBtn.click();
    await this.finishBtn.click();
  }
};
