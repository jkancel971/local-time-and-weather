const _ = require("lodash")
const input = require('./tools/inputArguments')

const myArguments = input.getArguments(process.argv)

_.forEach(myArguments, arg => {
  console.log(arg)
})
