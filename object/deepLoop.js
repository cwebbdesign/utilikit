// Like _.forEach() but deep.
// Loop through a nested object and pass the object and each key to a callback function.

function deepLoop(obj, callback) {
  'use strict';

  var value,
    o = obj;

  // if there's no callback, it's pointless to run through the loop
  if (!callback) {
    return o;
  }

  Object.keys(o)
    .forEach(function(key) {
      value = o[key];

      if (typeof value !== "object") {
        callback(o, key);
      } else {
        deepLoop(value, callback);
      }
    });

  return o;
}

module.exports = deepLoop;