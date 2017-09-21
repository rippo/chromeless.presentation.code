Running the following

```
$ cd ./Grabs
```

Outputs a screenshot of the google home page
-
```
$node grab01.js
```

Performs a google search and grabs a screenhot of the results
-
```
$ node grab02.js
```


Outputs a screenshot from my local site based on the ip address
---
Now run
````
$ ..\iis.bat
$ node grab03.js
````

Show the screenshot

Now we want to use the browser in headless mode. That is having no ui to see. I could run the following commands

```
$ cd "C:\Program Files (x86)\Google\Chrome\Application"
$ chrome --remote-debugging-port=9222 --disable-gpu --headless
```

However if I do this then the only way I can see to close down the headless chrome is to reboot my machine.

So there is another way, use docker, so run

```
$ ..\start-chromeless.bat
```

This fires up a linux docker container that runs headless chrome! thats all you need to do

To stop it just run
```
$ ..\stop-chromeless.bat
```

Now run 

````
$ node grab03.js
````
This either hangs or shows a blan screen! Either way the docker container doesn't know what `localhost` is so we need to use the host IP address.

So edit `grab03.js` so the ip address is changed to the ip of the host machine. Now run

````
$ node grab03.js
````
Show the screenshot notice it is ok

However this is not a recommended as I would like to pass this info in via the CLI

Pass in args via the CLI
-
Now run
````
$ node grab04.js --url=http://192.168.200.6:43504
$ \\Where IP is the host IP address of the machine
````
