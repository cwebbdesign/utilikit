// Dependencies
// --------------------------------------------------------------

// Test environment
var chai = require('chai'); // Test assertions that are expressive and readable
var should = chai.should;
var expect = chai.expect;
var deepLoop = require('../../lib/object/deepLoop.js');

// Tests
// ----------------------------------------------------------------
describe('deepLoop', function () {

    it('Should return the original object if callback is not passed', function () {
        var original = {1:1};
        var modified = deepLoop(original);

        expect(modified).to.equal(original);
    });

    it('Should return the original object if callback is passed', function () {
        var original = {1:1};
        var modified = deepLoop(original, function () {});

        expect(modified).to.equal(original);
    });


    describe('is passed nested objects', function () {

        it('Should call the callback with the keys of nested objects', function () {
            var original = {1:1, 2: {3:3}};
            var testArray = [];
            var callback = function (obj, key) {
                testArray.push(obj[key]);
            };
            var modifed = deepLoop(original, callback);

            expect(testArray.toString()).to.equal('1,3');
        });

        it('Should not call the callback', function () {
            var original = {1:{3:{}}};
            var x = 1;
            var callback = function (obj, key) {
                x+=1;
            };
            var modifed = deepLoop(original, callback);

            expect(x).to.equal(1);
        });

    });
});
