var stream = require('stream')
var _ = require('lodash-node')
var sinon = require('sinon')
var expect = require('chai').expect
var StringifyStream = require('../')

var numRows = 10
describe('stringify test', function () {

  describe('given a json string', function () {

    it('should parse into objects', function (done) {
      var stringify = new StringifyStream()
      expect(stringify).to.exist
      var inputStream = objectStream()
      var output = inputStream.pipe(stringify)
      var validateLineSpy = sinon.spy(validateLine)

      output.on('finish', finishHandler)
      output.on('readable', readableHandler)

      function validateLine(json) {
        expect(json).to.exist
        expect(json).to.be.an('string')
      }

      function readableHandler() {
        var data
        while (true) {
          data = output.read()
          if (!data) {
            break
          }
          validateLineSpy(data)

        }
      }

      function finishHandler() {
        expect(validateLineSpy.callCount).to.be.above(1)
        done()
      }

    })
  })

  function createWriter() {
    var writer = new stream.Transform({
      objectMode: true
    })
    writer._transform = function transform(chunk, encoding, done) {
      this.push(chunk)
      done()
    }
    return writer
  }
  function objectStream() {
    var writer = createWriter()
    var ids = _.range(0, numRows)
    ids.forEach(function writeRow(id) {
      var row = {
        id: id,
        foo: 'bar_' + id
      }
      writer.write(row)
    })
    setTimeout(writer.end.bind(writer), 10)
    return writer
  }
})
