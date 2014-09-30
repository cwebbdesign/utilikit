// Adapted from Functional JavaScript
// ----------------------------
var exists = require('./exists');

// check to see that the value is not: null, undefined or false.
function truthy(x) {
  'use strict';
  return (x !== false) && exists(x);
}
module.exports = truthy;