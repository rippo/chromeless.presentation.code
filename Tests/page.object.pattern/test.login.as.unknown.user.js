const { Chromeless } = require('chromeless')
const { expect } = require('chai').use(require('chai-string'))

const AccountLoginPage = require('./account.login.page')
const options = require('yargs-parser')(process.argv.slice(2))

describe('When trying to login as an unknown user', function () {

    this.timeout(10000)
    var chromeless = new Chromeless()

    var page = new AccountLoginPage(chromeless, options)

    it('check we start on the login page', async function () {
        page.visit()
        const ok = await page.checkWeAreOnTheAccountPage()
        expect(ok).to.be.true
    })

    
    it('when submitting a blank form check username required validation is shown', async function() {
        await page.submitTheForm()
        const ok = await page.checkUserNameValidationIsShown()
        expect(ok).to.be.true
    })

    it('when submitting a blank form check password required validation is shown', async function() {
        //await page.submitTheForm()  //Do we need this?
        const ok = await page.checkPasswordValidationIsShown()
        expect(ok).to.be.true
    })
    
    it ('when submitting a invalid user check that the unknown user message is displayed', async function() {
        page.visit() //clears the validation!
        await page.fillInTheUsername('unknown@test.com')
        await page.fillInThePassword('abc')
        await page.submitTheForm()
        const ok = await page.checkUserNameNotFoundIsShown()
        expect(ok).to.be.true
    })


    after(async function () {
        const screenshot = await chromeless.screenshot()
        console.log('\n  Grab: ' + screenshot)
        await chromeless.end()
    })

})
