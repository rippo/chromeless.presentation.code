const { Chromeless } = require('chromeless')
const { expect } = require('chai').use(require('chai-string'))
const options = require('yargs-parser')(process.argv.slice(2))


describe('When trying to login', function () {


    //increase as mocha has a 2 second set by default
    this.timeout(10000);
    var chromeless;

    before(async function () {
        chromeless = new Chromeless();
        await chromeless
            .goto(options.url + "/account")
            .setViewport({ width: 1200, height: 800, scale: 1 })
    })

    it('check we are on the login page /account', async function () {
        const href = await chromeless
            .evaluate(href => window.location.href)
        expect(href).to.endsWith('/account')
    })

    it('check login page has correct title', async function () {
        const title = await chromeless
            .evaluate(title => document.querySelector('h1').innerHTML)
        expect(title).to.equal('Login')
    })

    it('when submitting a blank form check we are still on the account page', async function () {
        const href = await chromeless
            //.type('rippo', 'input[Id="Username"]')
            .click('input[type="submit"]')
            .wait(".field-validation-error[data-valmsg-for='Password']")
            .evaluate(href => window.location.href)

        expect(href).to.endsWith('/account')
    })

    it('also shows the username validation message', async function () {
        var ok = await chromeless
            .exists(".field-validation-error[data-valmsg-for='Username']")
        expect(ok).to.be.true
    })

    it('also shows the password validation message', async function () {
        var ok = await chromeless
            .exists(".field-validation-error[data-valmsg-for='Password']")
        expect(ok).to.be.true
    })

    it('logs in test1@test.com successfully', async function () {
        const href = await chromeless
            .type('test1@test.com', 'input[Id="Username"]')
            .type('123', 'input[Id="Password"]')
            .click('input[type="submit"]')
            .wait('input[Value="Go"]')
            .evaluate(href => window.location.href)

        expect(href).to.endsWith('/account/search/1')
    })


    after(async function () {
        await chromeless.end()
    })

})