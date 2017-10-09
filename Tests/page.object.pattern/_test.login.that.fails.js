const { Chromeless } = require('chromeless')
const { expect } = require('chai').use(require('chai-string'))

const AccountLoginPage = require('./account.login.page')
const AccountSearchPage = require('./account.search.page')
const options = require('yargs-parser')(process.argv.slice(2))

describe('When logging in as test3@test.com', function () {

    this.timeout(10000)
    var chromeless = new Chromeless(/*{debug: true}*/)

    var loginPage = new AccountLoginPage(chromeless, options)
    var searchPage = new AccountSearchPage(chromeless, options)

    it('login as test3@test.com', async function() {
        await loginPage.fullLogin('test3@test.com', 'abc')
    })

    it('check we are on the search page', async function() {
        const ok = await searchPage.checkWeAreOnTheSearchPage(2)
        expect(ok).to.be.true
    })

  
    after(async function () {
        await chromeless.end()
    })

})
