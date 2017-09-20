const { Chromeless } = require('chromeless')

async function run() {

    const chromeless = new Chromeless()

    const screenshot = await chromeless
        .goto('http://www.google.com')
        .screenshot({ filepath: 'd:/_tmp/google.png'})

    console.log('\n  Grab: ' + screenshot)

    await chromeless.end()

}

run().catch(console.error.bind(console))