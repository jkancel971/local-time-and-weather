const getLocation = async (getApiAnswer, address) => {
    const apiAnswer = 
      await getApiAnswer(address)
    return {formattedAddress: apiAnswer.results[0].formatted_address, 
            latitude: apiAnswer.results[0].geometry.location.lat,
            longitude: apiAnswer.results[0].geometry.location.lng}
}

exports.getLocation = getLocation
