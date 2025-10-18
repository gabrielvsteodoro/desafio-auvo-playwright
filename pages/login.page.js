exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    // digita cada letra com delay de 200ms
    await this.usernameInput.type(username, { delay: 200 });
    await this.passwordInput.type(password, { delay: 200 });
    await this.loginButton.click();
  }
};
