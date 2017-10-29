# Richard Wilde 

Headless Chrome and Chromeless

Ask me questions: @rippo

---

# What do you mean headless Chrome?

---

# What do you mean Chromeless?

---

# A play area?

https://chromeless.netlify.com 

---
# Installation

To install chromeless

Make sure you have Node v8.2 or higher
https://nodejs.org/en/ 

````
$ node --version
$ git clone https://github.com/graphcool/chromeless.git
````



---
# Installation

**IMPORTANT** make sure you change directory to chromeless
````
$ cd chromeless
$ npm install
$ npm run build
````
At this point you have chromeless configured

---

# Recommendation use NPM link

So you do not need to install into every one of your projects!


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
$ node grab01.js
````

---
# What did we just do?
Notice how chrome opened, it navigated to a page and then chrome closed!

Also we took a screen grab.

---

# Demo 2: Perform a google search

- go to Google home page
- key in "richard wilde bromyard uk"
- press enter
- wait for a div to come back with results
- take a screen grab of the results

---
# Demo 2: But headless right?

To run chromeless in headless mode you can
````
$ C:\Program Files (x86)\Google\Chrome\Application\chrome 
    --remote-debugging-port=9222 --disable-gpu --headless
````

> Problem is if I do this then I will not be able to work out which process to close unless I reboot or kill all Chrome processes!

---
# Can docker come to our rescue?

https://hub.docker.com/r/yukinying/chrome-headless-browser/

````
docker run --init -it --rm --name chrome 
  --shm-size=1024m -d -p 9222:9222 --cap-add=SYS_ADMIN 
  yukinying/chrome-headless-browser --headless 
  --disable-gpu --hide-scrollbars --window-size=1280,800
````

---
# TIP: Throw that into a bat file! 

````
$ ..\start-chromeless.bat
$ node grab02.js
````

---
 # Lets test my local site!

````
$ node grab03.js  //fingers crossed!
````

What went wrong?

---
# When is local not local?

**TIP:** localhost refers to the local docker instance!

````
//const ip = "localhost"
const ip = "192.168.200.6"
````

````
$ node grab03.js
````

---
# Can I pass this in as an argument?

````
$ node grab04.js --url=http://192.168.200.6:43504
````

e.g.
````
$ node grab04.js --url=http://192.168.200.6:43504 
    --username=foo --password=abc
````

---

# But we are here to learn about testing!

I am using mocha and chai as the test/assertion libraries.

---

# Mocha 

is a feature-rich JavaScript test framework running on Node.js and in the browser.

https://mochajs.org/

---

# Chai 

is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. 

http://chaijs.com/

---

# To install

````
$ npm-install -g mocha
$ npm-install -g chai
````

---

# Test 01

Opens localhost site and evaluates title is correct

````
$ cd ..\Tests
$ mocha test01.js --url=http://192.168.200.6:43504
````
Hoorah a pass!

---

# Test 02

Shows how we can use before/after

aka setup/teardown

````
$ mocha test02.js --url=http://192.168.200.6:43504
````

---

# Test 03

Lets login as a user

````
$ mocha test03.js --url=http://192.168.200.6:43504
````

---

# Can we use the Page Object model?

This runs all test files that begins with the word test
````
$ cd page.object.pattern
$ mocha test*.js --url=http://192.168.200.6:43504
````
---

# Well its not that fast!

We can use a docker container that I installed node, chromeless, required node modules, concurrently

````
$ ..\..\stop-chromeless.bat
$ docker run -it -p 9222:9222 
     -v D:\Projects\Node\Source\chromeless.presentation.code:/data 
     -w /data/watch
     --cap-add=SYS_ADMIN rippo/chrome-headless bash

$ ./all.sh
````

---

# But wait the output is screwy?

We can have different mocha reporters... 

REPORTER="min"   #Runs with minimum output

````
$ time ./all.sh
````


---

# What is Serverless?


