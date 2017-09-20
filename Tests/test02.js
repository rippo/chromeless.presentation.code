const { Chromeless } = require('chromeless')
const { expect } = require('chai')
const options = require('yargs-parser')(process.argv.slice(2))


describe('When visiting my fantastically designed website it', function () {

    //increase as mocha has a 2 second set by default
    this.timeout(10000);
    var chromeless;
    var screen;

    before(async function () {
        chromeless = new Chromeless();
        screen = await chromeless
            .goto(options.url)
            .setViewport({ width: 1200, height: 800, scale: 1 })
            .screenshot()

    });

    it('shows the correct page title', async function () {

        const pageTitle = await chromeless
            .evaluate(() => {
                return document.title;
            })

        expect(pageTitle).to.equal('Home - CasperJS Mvc')

    })

    it('shows the correct text inside the h1 jumbotron', async function () {

        const jumbotronH1 = await chromeless
            .evaluate(() => {
                return document.querySelector('.jumbotron > h1').innerHTML
            })

        expect(jumbotronH1).to.equal('CasperJS Testing')

    })


    after(async function () {
        await chromeless.end()
        console.log('\n  Grab: ' + screen)
    })


})