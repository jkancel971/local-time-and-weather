const assert = require('assert')
const myWorld = require('../src/main')

describe('helloWorld', function() {
  describe('#helloWorld()', function() {
    it('should return hello world', function() {
      assert.equal(myWorld.helloWorld(), 'hello world')
    })
  })
})