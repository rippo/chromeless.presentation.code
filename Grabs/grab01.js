const { Chromeless } = require('chromeless')

async function run() {

    const chromeless = new Chromeless()

    const screenshot = await chromeless
        .goto('https://www.google.com')
        .screenshot()

    console.log('\n  Grab: ' + screenshot)

    await chromeless.end()

}

run().catch(console.error.bind(console))