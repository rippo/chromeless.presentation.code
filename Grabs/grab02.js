const { Chromeless } = require('chromeless')

async function run() {

    const chromeless = new Chromeless()

    const screenshot = await chromeless
        .goto('http://www.google.com')
        .type('richard wilde bromyard uk', 'input[name="q"]')
        .press(13)
        .wait('#resultStats')
        .screenshot("#rcnt", { filepath: 'd:/_tmp/google.png' })

    console.log('\n  Grab: ' + screenshot)

    await chromeless.end()

}

run().catch(console.error.bind(console))