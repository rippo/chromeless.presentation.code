const { Chromeless } = require('chromeless')
const args = require('yargs-parser')


async function run() {

    const options = args(process.argv.slice(2))
    const chromeless = new Chromeless()
    //console.log(options)

    const screenshot = await chromeless
        .goto(options.url)
        .screenshot({ filepath: 'd:/_tmp/google.png' })

    console.log(screenshot)

    await chromeless.end()

}

run().catch(console.error.bind(console))