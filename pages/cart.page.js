exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
  }

  async prosseguirCheckout() {
    await this.checkoutButton.click();
  }
};
