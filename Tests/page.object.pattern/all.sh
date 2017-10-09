#!/bin/bash

clear

#Settings
OUTFILE="results.log"
URL="http://192.168.200.6:43504/"
REPORTER="spec"
#REPORTER="min"   #Runs with minimum output


#REPORTER="mocha-teamcity-reporter-v2"
#REPORTER="mocha-simple-html-reporter --reporter-options output=report.html"
#REPORTER="mocha-multi-reporters --reporter-options configFile=config.json"


#remove old log file
rm -f $OUTFILE

#should we kill any extra chrome processes?
numproc="$(ps -ef | grep -v grep | grep chrome | wc -l)"
limit=4

#if we have more than 4 chrome processes then kill them
if [ "$numproc" -gt "$limit" ] ; then
  echo "Found $numproc chrome processes, killing"
  pkill chrome
fi

#start chrome if not found
numproc="$(ps -ef | grep -v grep | grep chrome | wc -l)"
echo "Found $numproc chrome processes"
if [ "$numproc" -eq 0 ] ; then
  echo "Starting headless chrome"
  google-chrome-stable --headless --disable-gpu --remote-debugging-address=0.0.0.0 --remote-debugging-port=9222 &
fi 


echo "Running tests on url $URL using mocha reporter $REPORTER"

#Run tests using npm concurrently
#Remember IIS express might barf so may want to limit to around 10 tests!
concurrently -r \
  "mocha test.login.as.test1.js --url=$URL --reporter $REPORTER" \
  "mocha test.login.as.test2.js --url=$URL --reporter $REPORTER" \
  "mocha test.login.as.unknown.user.js --url=$URL --reporter $REPORTER" \
  #"mocha test.login.as.test1.js --url=$URL --reporter $REPORTER" \
  #"mocha test.login.as.test2.js --url=$URL --reporter $REPORTER" \
  #"mocha test.login.as.test1.js --url=$URL --reporter $REPORTER" \
  #"mocha test.login.as.test2.js --url=$URL --reporter $REPORTER" \
  #"mocha test.login.as.test1.js --url=$URL --reporter $REPORTER" \
  #"mocha test.login.as.test2.js --url=$URL --reporter $REPORTER" \
#>> "$OUTFILE"

  #"mocha _test.login.that.fails.js --url=$URL --reporter $REPORTER" \

#clear
#sort "$OUTFILE"
