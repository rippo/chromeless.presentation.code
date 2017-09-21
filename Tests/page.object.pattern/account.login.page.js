
var AccountLoginPage = function (chromeless, options) {
    this.chromeless = chromeless
    this.options = options

    this.usernameLocator = 'input[id="Username"]'
    this.passwordLocator = 'input[id="Password"]'
    this.submitButtonLocator = 'form input[type="submit"]'
    this.usernameRequiredValidationLocator = '.field-validation-error[data-valmsg-for="Username"]'
    this.passwordRequiredValidationLocator = '.field-validation-error[data-valmsg-for="Password"]'
    this.page = '/account'
};

AccountLoginPage.prototype.visit = async function () {
    await this.chromeless
        .goto(this.options.url + this.page)
        .setViewport({ width: 1200, height: 800, scale: 1 })
}

AccountLoginPage.prototype.checkWeAreOnTheAccountPage = async function () {
    const href = await this.chromeless
        .evaluate(href => window.location.href)

    return href.slice(-this.page.length) === this.page
}

AccountLoginPage.prototype.fillInTheUsername = async function (username) {
    await this.chromeless
        .type(username, this.usernameLocator)
}

AccountLoginPage.prototype.fillInThePassword = async function (password) {
    await this.chromeless
        .type(password, this.passwordLocator)
}

AccountLoginPage.prototype.submitTheForm = async function () {
    await this.chromeless
        .click(this.submitButtonLocator)
}

AccountLoginPage.prototype.checkUserNameValidationIsShown = async function () {
    return await this.chromeless
        .wait('input.input-validation-error')
        .exists(this.usernameRequiredValidationLocator)
}

AccountLoginPage.prototype.checkPasswordValidationIsShown = async function () {
    return await this.chromeless
        .wait('input.input-validation-error')
        .exists(this.passwordRequiredValidationLocator)
}

AccountLoginPage.prototype.checkUserNameNotFoundIsShown = async function () {
    return await this.chromeless
        .wait('input.input-validation-error')
        .evaluate(() => 
                document.getElementById('Username')
                    
                )
}

module.exports = AccountLoginPage