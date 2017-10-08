# Chromeless presenation

Send me twetts via [@rippo](https://twitter.com/rippo)

## Online play area
https://chromeless.netlify.com


## To install chromeless
Make sure you have Node v8.2 or higher 
````
$ node --version
$ md presentation
$ cd presentation
$ git clone https://github.com/graphcool/chromeless.git
````
**IMPORTANT** make sure you CD to chromeless
````
$ cd chromeless
$ npm install
$ npm run build
````

Npm link chromeless
---
So you do not need to install into every one of your projects.
````
$ npm link
$ cd ../myproject  <- go to folder where you want run chromeless
$ npm link chromeless
````

Then inside your project folder
````
$ npm install -g mocha
$ npm install chai
$ npm i yargs-parser
````

Now you *should* be ready to roll!

