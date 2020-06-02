const assert = require('assert')
const myArgs = require('../src/tools/inputArguments')

describe('Tests', function() {
  describe('#getArguments()', function() {
    it('should return arguments in input', function() {
      const testExample = ["node.exe","src/main.js", "example 1,"]
      assert.deepEqual(myArgs.getArguments(testExample), ['example 1'])
    })
  })
})
