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

### To install chromeless
Make sure you have Node v8.2 or higher https://nodejs.org/en/ 
```
$ node --version
$ git clone https://github.com/graphcool/chromeless.git
```
**IMPORTANT** make sure you change directory to chromeless
```
$ cd chromeless
$ npm install
$ npm run build
```
At this point you have chromeless configured

---

# Recommendation use NPM link

So you do not need to install into every one of your projects


```
$ npm link
$ cd ../myproject  <- go to folder where you want run chromeless
$ npm link chromeless
```

At this point you now have linked chromeless into your project folder

---

# Demo 1: Smash and grab!

```
$ cd .\grabs
$ node grab.js
```

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

# Demo 3: What If I don't want to see a browser?

To run chromeless in headless mode you can...
```
$ C:\Program Files (x86)\Google\Chrome\Application
chrome --remote-debugging-port=9222 --disable-gpu --headless
```

Problem is if I do this then I will not be able to work out which process to close unless I reboot or kill all Chrome processes!

---
# Can docker come to our rescue?

https://hub.docker.com/r/yukinying/chrome-headless-browser/

```
docker run --init -it --rm --name chrome --shm-size=1024m -d -p 9222:9222 --cap-add=SYS_ADMIN yukinying/chrome-headless-browser --headless --disable-gpu --hide-scrollbars --window-size=1280,800
```

**TIP:** Throw that into a bat file!

```
$ ..\start-chromeless.bat
$ node grab03.js  //fingers crossed!
```
What went wrong?

---
# When is local not local?

**TIP:** localhost referes to the local docker instance!

```
//const ip = "localhost"
const ip = "192.168.200.6"
```

```
$ node grab03.js
```

---
# Can I pass this in as an argument?

```
$ node grab04.js --url=http://192.168.200.6:43504
```


# What is Serverless?

---

