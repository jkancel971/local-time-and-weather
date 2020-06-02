var zipcodes = require('zipcodes');

const isValidPostalCode = (number) => {
  return (zipcodes.lookup(number) != undefined)
}

exports.isValidPostalCode = isValidPostalCode
