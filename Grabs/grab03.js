const { Chromeless } = require('chromeless')

//const ip = "localhost"
const ip = "192.168.200.6"

async function run() {

    const chromeless = new Chromeless()

    const screenshot = await chromeless
        .goto('http://' + ip + ':43504')
        .screenshot()

    console.log('\n  Grab: ' + screenshot)

    await chromeless.end()

}

run().catch(console.error.bind(console))