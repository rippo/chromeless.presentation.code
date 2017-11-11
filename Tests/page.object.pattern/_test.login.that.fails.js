const { Chromeless } = require('chromeless')
const { expect } = require('chai').use(require('chai-string'))

const AccountLoginPage = require('./account.login.page')
const AccountSearchPage = require('./account.search.page')
const options = require('yargs-parser')(process.argv.slice(2))

describe('When logging in as test3@test.com', function () {

    this.timeout(4000)
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


    //hack until this fix gets implemented
    //https://github.com/graphcool/chromeless/issues/321#issuecomment-342680644
    afterEach(function () {
        chromeless.queue.comandQueue = {};
        chromeless.queue.lastWaitAll = null;
        chromeless.lastReturnPromise = null;
    }); 
  
    after(async function () {
        await chromeless.end()
    })

})
