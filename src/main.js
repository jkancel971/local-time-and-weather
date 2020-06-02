const dotenv = require("dotenv")
dotenv.config()
const _ = require("lodash")
const input = require('./tools/inputArguments')
const postalValidation = require('./tools/postalCodeValidation')
const apiServices = require('./services/api.js')
const myLocation = require('../src/services/location')
const myTime = require('../src/services/time')
const myWeather = require('../src/services/weather')

const myArguments = input.getArguments(process.argv)

const getLocationFromApi = (address) => {
  return myLocation
    .getLocation(apiServices.getApiAnswerLocation, address)
}

const getCurrentTimeFromApi = (latitude, longitude, date) => {
  return myTime
    .getTime(apiServices.getApiAnswerTimeStamp, latitude, longitude, date)
}

const getWeatherFromApi = (latitude, longitude) => {
  return myWeather
    .getWeather(apiServices.getWeatherFromApi, latitude, longitude)
}

const retrieveAllInformation = async (address) => {
  if(isNaN(address) || postalValidation.isValidPostalCode(address)) {
    const myDate = new Date()
    const locationResult = await 
      getLocationFromApi(address)
    const timeResult = await 
      getCurrentTimeFromApi(locationResult.latitude, locationResult.longitude, myDate.getTime()
        + myDate.getTimezoneOffset()*60*1000)
    const weatherResult = await 
      getWeatherFromApi(locationResult.latitude, locationResult.longitude)
    console.log(`Your input: ${address}\r\nAddress found: ${locationResult.formattedAddress}\r\nLocal Time: ${timeResult.toString().split(' ').slice(0, 5).join(' ')}\r\nWeather: ${weatherResult.weather}\r\nTemperature: ${Math.round(weatherResult.temperature-273.15)} °C\r\n`)
  } else {
    throw new Error("Invalid postal code")
  }
}

_.forEach(myArguments, async arg => {
  try {
    await retrieveAllInformation(arg)
  } catch {
    console.error("Invalid input :", arg,"\r\n")
  }
})
