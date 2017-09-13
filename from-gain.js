module.exports = function gainToDecibels(value) {
  if (value == null) return 0
  return 20 * (0.43429 * Math.log(value))
}