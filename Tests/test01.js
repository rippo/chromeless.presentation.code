const { Chromeless } = require('chromeless')
const { expect } = require('chai')
const options = require('yargs-parser')(process.argv.slice(2))

describe('When visiting my fantastically designed website it', function () {

    //increase as mocha has a 2 second set by default
    this.timeout(10000);
    //const options = args(process.argv.slice(2))
    const chromeless = new Chromeless()

    it('shows the correct page title', async function () {

        await chromeless
            .goto(options.url)
            .setViewport({ width: 600, height: 600, scale: 1 })

        const pageTitle = await chromeless
            .evaluate(() => {
                return document.title
            })

        expect(pageTitle).to.equal('Home - CasperJS Mvc')

        await chromeless.end()
    })



})