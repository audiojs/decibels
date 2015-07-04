var gainToDecibels = require('./from-gain')
var decibelsToGain = require('./to-gain')

console.log(gainToDecibels(10))
console.log(decibelsToGain(-20))