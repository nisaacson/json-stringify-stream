# JSON StringifyStream

Stringifya readable stream of objects into json stringicy

[![NPM](https://nodei.co/npm/json-stringify-stream.png)](https://nodei.co/npm/json-stringify-stream/)

[![Build Status](https://travis-ci.org/nisaacson/json-stringify-stream.png)](https://travis-ci.org/nisaacson/json-stringify-stream)
[![Dependency Status](https://david-dm.org/nisaacson/json-stringify-stream/status.png)](https://david-dm.org/nisaacson/json-stringify-stream)
[![Code Climate](https://codeclimate.com/github/nisaacson/json-stringify-stream.png)](https://codeclimate.com/github/nisaacson/json-stringify-stream)

# Installation
```bash
npm install -S json-stringify-stream
```

# Usage

Create an instance of Stringify and pipe a readable stream of objects into that instance

```javascript
var StringifyStream = require('json-stringify-stream')
// stringify is an instance of require('stream').Transform
var stringify = new StringifyStream()

var readStream = {} // a stream of single objects
var stringify = readStream.pipe(splitter)
stringify.on('data', function(chunk) {
  console.dir(chunk) // json string
})
stringify.on('finish', function() {
  console.log('finish event called, all objects stringified')
})
```



