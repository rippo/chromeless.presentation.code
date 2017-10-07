# Notes

We use mocha and chai as the test/assertion libraries.

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser. https://mochajs.org/

Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. http://chaijs.com/

## Setup

````
$ npm-install -g mocha
$ npm-install -g chai
````

If not already running docker

````
$ start-chromeless.bat
````

Navigate to the following directory

```
$ cd .\Tests
```
## Tests

### 1. Opens localhost site and evaluates title is correct

```
$ mocha test01.js --url=http://192.168.200.6:43504
```

### 2. Shows how we can use before/after (aka setup/teardown )

```
$ mocha test02.js --url=http://192.168.200.6:43504
```

### 3. Shows how we can login as a user

```
$ mocha test03.js --url=http://192.168.200.6:43504
```
