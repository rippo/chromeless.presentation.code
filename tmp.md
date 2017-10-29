

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



-----------------------------
DOCKER NODE



docker pull node
docker run --rm -it -v D:\Projects\Docker.Shares\node:/data node bash
cd /data
mkdir aws-chrome
cd aws-chrome
git clone https://github.com/graphcool/chromeless.git
cd chromeless
npm install
npm run build
npm install chrome
npm link
cd ..
mkdir projects
cd projects
npm link chromeless  

dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install
apt-get update


apt-get install -f
dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install


dpkg -i google-chrome*.deb


RUN
docker run --rm -it --name rippo -v D:\Projects\Docker.Shares\node:/data -w /data/aws-chrome/projects -p 9222:9222  --cap-add=SYS_ADMIN rippo/chromeless:version1 bash

google-chrome-stable --headless --disable-gpu --remote-debugging-address=0.0.0.0 --remote-debugging-port=9222 &
google-chrome-stable --headless --disable-gpu &


To fix npm if its broken

https://github.com/nodejs/docker-node/issues/541
yarn global add npm


mv /tmp/*.png /data/aws-chrome/projects/grabs

hostname --ip-address



$ npm install mocha-teamcity-reporter




------------aWS test
docker run -it -p 9222:9222 --cap-add=SYS_ADMIN rippo/chrome-headless-aws bash



EXPORT/IMPORT DOCKER


docker save -o "d:\_tmp\rippo_chrome-headless.zip" rippo/chrome-headless
docker save -o "d:\_tmp\rippo_chrome-headless-aws.zip" rippo/chrome-headless-aws


docker load -i d:\_tmp\rippo_chrome-headless.zip




npm install -g grunt-cli
npm install grunt
npm watch
