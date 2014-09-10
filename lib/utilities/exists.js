// Adapted from Functional JavaScript
// check for existence: not null and not undefined
var exists = function(x) {
    // replacing the prettier return x != null
    // with the clearer equivalent version below for newbies
    if (x === null || typeof x === "undefined") {
        return false
    } else {
        return true;
    }
};