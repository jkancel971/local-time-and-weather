const addSeconds= require('date-fns/addSeconds')

const getTime = async (getApiAnswer, lat, lng, date) => {
  const apiAnswer = 
    await getApiAnswer(lat, lng, date)
  const apiResult = {dstOffset: apiAnswer.dstOffset, 
                    rawOffset: apiAnswer.rawOffset}
  return calculateTimeDiff(date, apiResult)  
}

const calculateTimeDiff = (date, offSets) => {
  return addSeconds(date,offSets.dstOffset + offSets.rawOffset)
}

exports.getTime = getTime
