// doWhen
var isFunction = require('lodash-node/underscore/objects/isFunction');

function doWhen(condition, callback, context) {
    var c, context = context || this;
    if (isFunction(condition)) {
            // todo: wrap this in a try catch
            c = condition();
    } else {
            c = condition;
    };

    if (!!condition) {
        return callback.apply(context);
    } else {
        return undefined;
    }
};

module.exports = doWhen;