const { Chromeless } = require('chromeless')

const ip = "localhost"

async function run() {

    const chromeless = new Chromeless()

    const screenshot = await chromeless
        .goto('http://' + ip + ':43504')
        .screenshot({ filepath: 'd:/_tmp/google.png' })

    console.log(screenshot)

    await chromeless.end()

}

run().catch(console.error.bind(console))