// doWhen
var isFunction = require('lodash-node/underscore/objects/isFunction');

function doWhen(condition, callback, context) {
  'use strict';
  var c,
    self = context || this;
  if (isFunction(condition)) {
    // todo: wrap this in a try catch
    c = condition();
  } else {
    c = condition;
  }

  if (!!c) {
    return callback.apply(self);
  } else {
    return undefined;
  }
}

module.exports = doWhen;