const { Chromeless } = require('chromeless')
const { expect } = require('chai').use(require('chai-string'))
const options = require('yargs-parser')(process.argv.slice(2))


describe('When trying to login', function () {

    //increase as mocha has a 2 second set by default
    this.timeout(5000);
    var chromeless;
    //var promise;


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

    it('logs in test3@test.com successfully', async function (done) {

        try {

            var href = await chromeless
                .type('test3@test.com', 'input[Id="Username"]')
                .type('123', 'input[Id="Password"]')
                .click('input[type="submit"]')
                .wait('input[Value="Go"]', 2000)
                .evaluate(href => window.location.href)


            //This would fail as the input[Value="Go"] never appears on the page
            expect(href).to.endsWith('/account/search/1')

            done()
        } catch (e) {
            done(e)
        }

    })

    after(async function () {
        await chromeless.end()
    })

})