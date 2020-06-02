const axios = require("axios")

const getLocationFromApi = async (address) => {
  const apiAnswer = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${getKey()}`)
  if(apiAnswer.data.status == "OK"){
    return apiAnswer.data
  } else {
    throw new Error("Invalid address")
  }
}

const getTimeStampFromApi = async (lat, lng, utcnow) => {
  const apiAnswer = await axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${encodeURIComponent(lat)},${encodeURIComponent(lng)}&timestamp=${utcnow/1000}&key=${getKey()}`)
  if(apiAnswer.data.status == "OK"){
    return apiAnswer.data
  } else {
    throw new Error("Invalid address")
  }
}

const getWeatherFromApi = async (lat, lng) => {
  const apiAnswer = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}&appid=${getWeatherKey()}`)
  if(apiAnswer.status == "200"){
    return apiAnswer.data
  } else {
    throw new Error("Invalid address")
  }
}

const getKey = () => {
  return process.env.GOOGLEKEY
}

const getWeatherKey = () => {
  return process.env.WEATHERKEY
}

exports.getApiAnswerLocation = getLocationFromApi
exports.getApiAnswerTimeStamp = getTimeStampFromApi 
exports.getWeatherFromApi = getWeatherFromApi 
