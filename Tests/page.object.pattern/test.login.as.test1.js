const { Chromeless } = require('chromeless')
const { expect } = require('chai').use(require('chai-string'))

const AccountLoginPage = require('./account.login.page')
const AccountSearchPage = require('./account.search.page')
const options = require('yargs-parser')(process.argv.slice(2))

describe('When logging in as test1@test.com', function () {

    this.timeout(10000)
    var chromeless = new Chromeless()

    var loginPage = new AccountLoginPage(chromeless, options)
    var searchPage = new AccountSearchPage(chromeless, options)

    it('login as test1@test1.com', async function() {
        await loginPage.fullLogin('test1@test.com', 'abc')
    })

    it('check we are on the search page', async function() {
        const ok = await searchPage.checkWeAreOnTheSearchPage("1")
        expect(ok).to.be.true
    })

    it('check validation is show for a blank search', async function() {
        await searchPage.submitTheForm()
        const ok = await searchPage.checkValidationMessageShown()
        expect(ok).to.be.true
    })

    it ('dfd', async function() {
        await searchPage.fillInSearchBox('a')
        await searchPage.submitTheForm()
        var foo = await searchPage.checkResultsLength(3)
        console.log(foo)
    })
    
    after(async function () {
        const screenshot = await chromeless.screenshot()
        console.log('\n  Grab: ' + screenshot)
        await chromeless.end()
    })

})
