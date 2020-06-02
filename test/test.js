const assert = require('assert')
const myArgs = require('../src/tools/inputArguments')
const postalValidation = require('../src/tools/postalCodeValidation')

describe('Tests', function() {
  describe('#getArguments()', function() {
    it('should return arguments in input', function() {
      const testExample = ["node.exe","src/main.js", "example 1,"]
      assert.deepEqual(myArgs.getArguments(testExample), ['example 1'])
    })
  }),
  describe('#postalCodeVerificationFalse()', function() {
    it('should indicate that postal code is not valid', function() {
      const testExample = 69100
      assert.deepEqual(postalValidation.isValidPostalCode(testExample), false)
    })
  }),
  describe('#postalCodeVerificationTrue()', function() {
    it('should indicate that postal code is valid', function() {
      const testExample = 10005
      assert.deepEqual(postalValidation.isValidPostalCode(testExample), true)
    })
  })
})
