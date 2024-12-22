class loginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#id_username');
        this.passwordInput = page.locator('#id_password');
        this.loginButton = page.locator('button[type="submit"]');
        this.wrongPassworMessage = page.locator('.alert.alert-danger.alert-dismissable.alert-link')
    }

    async navigate() {
        await this.page.goto('https://www.seotenterprise.net/login?next=/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getWrongPasswordMessage() {
        return await this.wrongPassworMessage.textContent();
    }
}

module.exports = loginPage;