var Transform = require('stream').Transform
var util = require('util')

function Stringify() {
  var opts = {
    objectMode: true
  }
  Transform.call(this, opts)
}

util.inherits(Stringify, Transform)

Stringify.prototype._transform = function transform(chunk, encoding, done) {
  var data = JSON.stringify(chunk)
  this.push(data)
  done()
}

module.exports = Stringify
