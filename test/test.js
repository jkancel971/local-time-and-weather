const assert = require('assert')
const myArgs = require('../src/tools/inputArguments')
const postalValidation = require('../src/tools/postalCodeValidation')
const myLocation = require('../src/services/location')
const googleLocationResult = require('./googleAnswerLocation')

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
  }),
  describe('#getLocation()', function() {
    it('should return coordinates and address of location name', async function() {
      const address = "1600 Amphitheatre Parkway, Mountain View, CA"
      const getApiAnswer = (address) => {
        return new Promise((resolve,reject) => {
          resolve(googleLocationResult.locationResult)
          reject("Location test failed")
        })
      }
      const location = 
        await myLocation.getLocation(getApiAnswer,address)
      assert.deepEqual(location, {
        formattedAddress: "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA",
        latitude: 37.4267861,
        longitude: -122.0806032
      })
    })
  })
})
