var test = require('tape')
var dbToGain = require('../to-gain')
var gainToDb = require('../from-gain')

test('test gain -> db conversions', function (t) {
  t.equal(round(gainToDb(0)), -Infinity)
  t.equal(round(gainToDb(1)), 0)
  t.equal(round(gainToDb(2)), 6.0205)
  t.equal(round(gainToDb(0.5)), -6.0205)
  t.end()
})

test('test db -> gain conversions', function (t) {
  t.equal(round(dbToGain(0)), 1)
  t.equal(round(dbToGain(-Infinity)), 0)
  t.equal(round(dbToGain(-6)), 0.5012)
  t.equal(round(dbToGain(6)), 1.9953)
  t.end()
})

function round (value) {
  var pow = Math.pow(10, 4)
  return Math.round(value * pow) / pow
}
