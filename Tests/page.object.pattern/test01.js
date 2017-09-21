const { Chromeless } = require('chromeless')
const { expect } = require('chai').use(require('chai-string'))

const AccountLoginPage = require('./account.login.page')
const options = require('yargs-parser')(process.argv.slice(2))

describe('When trying to login', function () {

    this.timeout(10000)


    var chromeless = new Chromeless()

    var page = new AccountLoginPage(chromeless, options)
    page.visit()

    it('check we start on the login page', async function () {
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
    
    it ('when submitting a unknown user', async function() {
        await page.fillInTheUsername('unknown@test.com')
        await page.fillInThePassword('abc')
        await page.submitTheForm()
    })

    it('ff', async function(){
        console.log(await page.checkUserNameNotFoundIsShown())
    })


    //Screen ?

    after(async function () {
        const screenshot = await chromeless.screenshot()
        console.log('\n  Grab: ' + screenshot)
        await chromeless.end()
    })

})
