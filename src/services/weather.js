const getWeather = async (getApiAnswer, latitude, longitude) => {
  const apiAnswer = await 
    getApiAnswer(latitude, longitude)
  return {weather: apiAnswer.weather[0].description, 
          temperature: apiAnswer.main.temp}
}

exports.getWeather = getWeather
