# Richard Wilde 
Headless Chrome and Chromeless
Ask me questions: @rippo

---

# What do you mean headless Chrome?

---

# A play area?

https://chromeless.netlify.com 

---

# Installation

## To install chromeless
Make sure you have Node v8.2 or higher https://nodejs.org/en/ 
````
$ node --version
$ git clone https://github.com/graphcool/chromeless.git
````
**IMPORTANT** make sure you chnange directory to chromeless
````
$ cd chromeless
$ npm install
$ npm run build
````
At this point you have chromeless configured

---

# Recommendation use NPM link

So you do not need to install into every one of your projects


````
$ npm link
$ cd ../myproject  <- go to folder where you want run chromeless
$ npm link chromeless
````

At this point you now have linked chromeless into your project folder

---

# Demo 1: Smash and grab!

````
$ cd .\grabs
$ node grab.js
````

---
# What did we just do?
Notice how chrome opened, it navigated to a page and then chrome closed!

Also we took a screen grab.

---

# Demo 2: Perform a google search

- go to googles home page
- key in "richard wilde bromyard uk"
- press enter
- wait for a div to come back with results
- take a screen grab of the results




---

# What is Serverless?

---

