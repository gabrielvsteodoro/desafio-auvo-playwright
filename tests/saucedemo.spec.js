const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { ProductsPage } = require('../pages/products.page');
const { CartPage } = require('../pages/cart.page');
const { CheckoutPage } = require('../pages/checkout.page');
const { pause } = require('../utils/helpers'); // <- importar o helper

test('Deve realizar login com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await pause(page, 2000); // pausa para visual

  await loginPage.login('standard_user', 'secret_sauce');
  await pause(page, 2000); // pausa após login

  console.log('-> Verificando se login foi bem-sucedido...');
  await expect(page).toHaveURL(/inventory.html/);
  console.log('======= Login realizado com sucesso! ======= ');
});

test('Fluxo completo de compra', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  console.log('-> Abrindo página de login...');
  await loginPage.goto();
  await pause(page, 2000);

  console.log('-> Realizando login...');
  await loginPage.login('standard_user', 'secret_sauce');
  await pause(page, 2000);

  console.log('-> Validando produtos disponíveis...');
  await productsPage.validarProduto();
  await pause(page, 2000);

  console.log('-> Adicionando produto ao carrinho...');
  await productsPage.adicionarAoCarrinho();
  await pause(page, 2000);

  console.log('-> Indo para o carrinho e prosseguindo para checkout...');
  await cartPage.prosseguirCheckout();
  await pause(page, 2000);

  console.log('-> Finalizando pedido...');
  await checkoutPage.finalizarPedido('Gabriel', 'Teodoro', '12345');
  await pause(page, 2000);

  console.log('-> Verificando mensagem de confirmação de pedido...');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  console.log('======= Pedido finalizado com sucesso! =======');
});

