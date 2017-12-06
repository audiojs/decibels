var test = require('tape')
var dbToGain = require('../to-gain')
var gainToDb = require('../from-gain')

test('test gain -> db conversions', function (t) {
  t.equal(gainToDb(0), -Infinity)
  t.equal(gainToDb(1), 0)
  t.equal(gainToDb(2), 6.020537780907573)
  t.equal(gainToDb(0.5), -6.020537780907573)
  t.end()
})

test('test db -> gain conversions', function (t) {
  t.equal(dbToGain(0), 1)
  t.equal(dbToGain(-Infinity), 0)
  t.equal(dbToGain(-6), 0.5011836607504527)
  t.equal(dbToGain(6), 1.9952765389490936)
  t.end()
})
