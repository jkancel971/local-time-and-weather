const assert = require('assert')
const addHours= require('date-fns/addHours')
const myArgs = require('../src/tools/inputArguments')
const postalValidation = require('../src/tools/postalCodeValidation')
const myLocation = require('../src/services/location')
const myTime = require('../src/services/time')
const googleLocationResult = require('./googleAnswerLocation')
const googleTimeResult = require('./googleAnswerCurrentTime')

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
  }),
  describe('#getTime()', function() {
    it('should return the timestamp of the given coordinates', async function() {
      const getApiAnswer = (latitude, longitude, date) => {
        return new Promise((resolve,reject) => {
          resolve(googleTimeResult.currentTimeResult)
          reject("Timestamp test failed")
        })
      }
      // Epoch 1331161200 correponds to Wednesday, March 7, 2012 11:00:00 PM
      const date = new Date(0).setUTCSeconds(1331161200)
      const time = 
        await myTime.getTime(getApiAnswer,39.6034810,-119.6822510,date)
      assert.deepEqual(time, addHours(date,-8))
    })
  })
})
