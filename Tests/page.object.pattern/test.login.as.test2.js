const { Chromeless } = require('chromeless')
const { expect } = require('chai').use(require('chai-string'))

const AccountLoginPage = require('./account.login.page')
const AccountSearchPage = require('./account.search.page')
const options = require('yargs-parser')(process.argv.slice(2))

describe('When logging in as test2@test.com', function () {

    this.timeout(10000)
    var chromeless = new Chromeless(/*{debug: true}*/)

    var loginPage = new AccountLoginPage(chromeless, options)
    var searchPage = new AccountSearchPage(chromeless, options)

    it('login as test2@test.com', async function() {
        await loginPage.fullLogin('test2@test.com', 'abc')
    })

    it('check we are on the search page', async function() {
        const ok = await searchPage.checkWeAreOnTheSearchPage(2)
        expect(ok).to.be.true
    })

    it ('when we do a search for \'a\' then return 4 rows', async function() {
        await searchPage.fillInSearchBox('a')
        const resultsCount = await searchPage.getTableResultsLength()
        expect(resultsCount).to.equal(4)
    })

    it ('when we do a search for \'b\' then show no results could be found', async function() {
        await searchPage.visit(2)
        await searchPage.fillInSearchBox('b')
        const noResultsShown = await searchPage.checkNoResultsAlertIsShown()
        expect(noResultsShown).contains("Sorry no results could be found")
    })

   
    after(async function () {
        //const screenshot = await chromeless.screenshot()
        //console.log('\n  Grab: ' + screenshot)
        await chromeless.end()
    })

})
