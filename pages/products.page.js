const { expect } = require('@playwright/test');

exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
    this.firstProduct = page.locator('.inventory_item').first();
    this.productTitle = page.locator('.inventory_item_name').first();
    this.addToCartBtn = page.locator('.btn_inventory').first();
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async validarProduto() {
    console.log('\n[ProductsPage] Validando informações do primeiro produto...');

    // Espera os produtos aparecerem
    await this.page.waitForSelector('.inventory_item');

    // Valida título, preço e descrição com assert inteligente
    await expect(this.productTitle).toHaveText(/.+/);
    await expect(this.firstProduct.locator('.inventory_item_price')).toHaveText(/^\$\d/);
    await expect(this.firstProduct.locator('.inventory_item_desc')).toHaveText(/.+/);


    // Exibe o que foi lido (para log bonito)
    const titulo = await this.productTitle.textContent();
    const preco = await this.firstProduct.locator('.inventory_item_price').textContent();

    console.log(`Produto validado com sucesso: ${titulo.trim()} (${preco.trim()})`);
  }


  async adicionarAoCarrinho() {
    console.log('\n[ProductsPage] Adicionando produto ao carrinho...');

    await this.addToCartBtn.click();

    // Verifica se o botão mudou para "Remove" após adicionar
    await expect(this.addToCartBtn).toHaveText(/Remove/i);

    console.log('Produto adicionado ao carrinho. Indo para o carrinho...');
    await this.cartIcon.click();
  }
};
