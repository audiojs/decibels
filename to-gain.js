module.exports = function decibelsToGain(value){
  return Math.exp(value / 8.6858)
}