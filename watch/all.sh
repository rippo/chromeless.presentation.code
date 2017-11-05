#!/bin/bash

clear

#Settings
OUTFILE="results.log"
URL="http://192.168.200.9:43504/"
REPORTER="spec"
TESTDIR="../Tests/page.object.pattern"
#min|dot|json|json-stream|nyan
#REPORTER="min"   #Runs with minimum output


#remove old log file
rm -f $OUTFILE
rm -f "results.json"

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
concurrently \
  "mocha $TESTDIR/test.login.as.test1.js --url=$URL --reporter $REPORTER" \
  "mocha $TESTDIR/test.login.as.test2.js --url=$URL --reporter $REPORTER" \
  "mocha $TESTDIR/test.login.as.unknown.user.js --url=$URL --reporter $REPORTER" \
  > $OUTFILE

  #"mocha $TESTDIR/_test.login.that.fails.js --url=$URL --reporter $REPORTER" \

node process.js


  