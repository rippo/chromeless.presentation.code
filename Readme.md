Online play area
---
https://chromeless.netlify.com


--- 
To install 
--
Make sure you have Node v8.2 or higher 
````
$ node --version
$ md presentation
$ cd presentation
$ git clone https://github.com/graphcool/chromeless.git
````
IMPORTANT make sure you CD to chromless
````
$ cd chromeless
$ npm install
$ npm run build
````

To link chromless into other directories 
---
So you do not need to install into every one of your projects...
````
$ npm link
$ cd ../myproject  <- go to folder where you want run chromless
$ npm link chromeless
````

Then inside your project folder
````
$ npm install -g mocha
$ npm install chai
$ npm install minimist
$ npm install mocha-teamcity-reporter
````

---


Additonal items
---

In `.vs\config\applicationhost.config` add the following bindings so you can use any IP address on port 43504

```
<bindings>
    <binding protocol="http"        bindingInformation="*:43504:*" />
</bindings>
```
In elevated command prompt add
```
$ netsh http add urlacl url=http://*:43504/ user=Everyone
``` 




----



TO SORT

RANDOM NOTES TO SORT
-

to run chromeless headless start up

cd "C:\Program Files (x86)\Google\Chrome\Application"
chrome --remote-debugging-port=9222 --disable-gpu --headless


and run node test01.js

or mocha test06.js


CD D:\Projects\Scratch\chromeless-testing

mocha test06 --url=http://localhost:62726/login --user=richard@wildesoft.net --pass=letmein


 mocha --reporter mocha-teamcity-reporter test06 --url=http://localhost:62726/login --user=richard@wildesoft.net --pass=letmein


 https://chromeless.netlify.com




 

mocha test01.js --url=http://localhost:43504



slide how to install


-----------------------------------------
first grabs
-----------------------------------------
grab01  - grab screen grab from google
grab02a - do search in google do a screen grab
grab02b - start docker, do search in google so speed difference
grab03  - grab a screenshot of localhost
grab04  - shows args passed in from CLI

-----------------------------------------
then tests
-----------------------------------------
test01 - stop docker grab local screen of my site
         start docker show blank screen grab
test02 - command line args pass in my ip address 





            show .vs applicationhost
            show netsh add http aclurl etc
            run test with ip address passed into from cli
            show screen grab          


D:\projects\testing.casperjs.presentation.vscode.50mins\iis.bat

docker run --init -it --rm --name chrome --shm-size=1024m -d -p 9222:9222 --cap-add=SYS_ADMIN yukinying/chrome-headless-browser --headless --disable-gpu --hide-scrollbars --window-size=1280,800


docker stop chrome

