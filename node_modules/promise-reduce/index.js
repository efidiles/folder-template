const assert  = require('assert')
const Promise = require('any-promise')

module.exports = reduce

// Apply a function to all values.
// @param {Mixed|Mixed[]} val
// @param {Mixed} ctx
// @return {Function}
function reduce(fn, start) {
  assert.equal(typeof fn, 'function')
  return function(val) {
    val = Array.isArray(val) ? val : [val]

    const length = val.length;

    if (length === 0) {
      return Promise.resolve(start);
    }

    return val.reduce(function (promise, curr, index, arr) {
      return promise.then(function (prev) {
        if (prev === undefined && length === 1) {
          return curr;
        }

        return fn(prev, curr, index, arr)
      })
    }, Promise.resolve(start))
  }
}
