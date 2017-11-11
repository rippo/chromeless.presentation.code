var fs = require('fs')
var _ = require('underscore')

var rawcontent = ""
var results = {}

function readContent(callback) {
    fs.readFile('./results.log', 'utf8', function (err, contents) {
        //console.log(contents);
        rawcontent = contents
        var lines = contents.toString().split("\n")
        if (err) return callback(err)
        callback(null, lines.sort())
    });
}

function search(value, lines) {
    var result = []
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf(value) > -1) {
            result.push(lines[i])
        }
    }
    return result
}

function getFileNames(lines) {
    var result = []
    //console.log(lines.length)
    for (var i = 0; i < lines.length; i++) {
        //console.log("pushing " + lines[i])
        result.push((lines[i].split(" "))[2])
    }
    return result
}

function getPasses(index) {
    // e.g.  [5]   4 passing (2s)

    //var matcher = "\\[" + index.toString() + "\\]   \\d passing \\(\\ds\\)"
    var matcher = "\\[" + index.toString() + "\\]   \\d passing"
    var re = new RegExp(matcher, "g")
    var match = rawcontent.match(re);

    if (match === null)
        return 0

    return parseInt(match[0]
        .replace("[" + index + "]   ", "")
        .replace(" passing", ""))
}

function getFailures(index) {
    // e.g.  [5]   4 passing (2s)

    //var matcher = "\\[" + index.toString() + "\\]   \\d passing \\(\\ds\\)"
    var matcher = "\\[" + index.toString() + "\\]      Error: Timeout"
    var re = new RegExp(matcher, "g")
    var match = rawcontent.match(re);

    if (match === null)
        return 0

    return 1
}


//content is an array
readContent(function (err, content) {
    //console.log("Array length:" + content.length)
    //console.log(content.join("\n"))

    var raw = search("] mocha ", content)
    //console.log(raw.join("\n"))

    var fileNames = getFileNames(raw)
    //console.log(fileNames.length)


    _.each(fileNames, function (value, i) {
        results[i] = {
            index: i,
            filename: value,
            passes: getPasses(i),
            failures: getFailures(i)
        }
    })

    

    //Final result
    //_.each(results, function (value, i) {
    //    console.log(value)
    //})

    fs.writeFileSync('results.json',
    JSON.stringify(results, null, 2) , 'utf-8');     
})
