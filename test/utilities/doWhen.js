// Dependencies
// --------------------------------------------------------------

// Test environment
var chai = require('chai'); // Test assertions that are expressive and readable
//var should = chai.should;
var expect = chai.expect;
var doWhen = require('../../lib/utilities/doWhen.js');

// Tests
// ----------------------------------------------------------------
describe('doWhen', function() {
  'use strict';
  //describe('condition is function', function () {
  //    it('Should evaluate the condition if its a function', function () {
  //        var x = 0;
  //        var callback = function () { return x = 1; };
  //        doWhen(true, callback);
  //        expect(x).to.equal(1);
  //    });
  //});
  it('Should execute a callback if the condition passed evaluates to true', function() {
    var x = 0;
    var callback = function() {
      return x += 1;
    };

    doWhen(true, callback);
    expect(x).to.equal(1);
  });

  it('Should not execute a callback if the condition passed evaluates to false', function() {
    var x = 0;
    var callback = function() {
      return x += 1;
    };

    doWhen(false, callback);
    expect(x).to.equal(0);
  });

  it('Should pass the callback a context if one is provided', function() {
    var context = {
      name: 'test'
    };
    var callback = function() {
      return this.name;
    };

    var name = doWhen(true, callback, context);
    expect(name).to.equal('test');
  });


});