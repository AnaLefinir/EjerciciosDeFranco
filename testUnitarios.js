/**
 * Created by Anita on 16/08/2016.
 */
var assert = require('assert');
var validationModule = require("./Validation.js");


describe('Test for Validation Module', function () {
    it('-Should get false from the function validationEmail when try to pass in the arguments: \'?\'', function () {
        assert.equal(false, validationModule.validateEmail('ana?@gmail.com'));
    });

    it('-Should get false from the function validationEmail when try to pass in the arguments: \'.\' ', function () {
        assert.equal(false, validationModule.validateEmail('ana.@gmail.com'));
    });

    it('-Should get true from the function validationEmail when pass as arguments: \'analefinir@gmail.com\'', function () {
        assert.equal(true, validationModule.validateEmail('analefinir@gmail.com'));
    });

    it('-Should get true from the function validationEmail when pass as arguments: \'ana99@gmail.com\'', function () {
        assert.equal(true, validationModule.validateEmail('ana99@gmail.com'));
    });

    it('-Should get true from the function validationEmail when pass as arguments: \'ana_@gmail.com\'', function () {
        assert.equal(true, validationModule.validateEmail('ana_@gmail.com'));
    });

    it('-Should get false from the function validationNumber when pass as arguments:\'222d\'', function () {
        assert.equal(false, validationModule.validateNumber('222d'));
    });
    it('-Should get false from the function validationNumber when pass as arguments:\'22,3\'', function () {
        assert.equal(false, validationModule.validateNumber('22,3'));
    });

    it('-Should get false from the function validationNumber when pass as arguments:\'x222\'', function () {
        assert.equal(false, validationModule.validateNumber('x222'));
    });

    it('-Should get false from the function validationNumber when pass as arguments:\'22s3\'', function () {
        assert.equal(false, validationModule.validateNumber('22s3'));
    });

    it('-Should get true from the function validationNumber when pass as arguments:\'222\'', function () {
        assert.equal(true, validationModule.validateNumber('222'));
    });

    it('-Should get true from the function validationNumber when pass as arguments:\'22.3\'', function () {
        assert.equal(true, validationModule.validateNumber('22.3'));
    });

    it('-Should get false from the function validationIntegerNumber when pass as arguments:\'2dd\'', function () {
        assert.equal(false, validationModule.validateIntegerNumber('2dd'));
    });

    it('-Should get false from the function validationIntegerNumber when pass as arguments\'22.3\'', function () {
        assert.equal(false, validationModule.validateIntegerNumber('22.3'));
    });

    it('-Should get false from the function validationIntegerNumber when pass as arguments\'x222\'', function () {
        assert.equal(false, validationModule.validateIntegerNumber('x222'));
    });

    it('-Should get false from the function validationIntegerNumber when pass as arguments\'22s3\'', function () {
        assert.equal(false, validationModule.validateIntegerNumber('22s3'));
    });

    it('-Should get true from the function validationIntegerNumber when pass as arguments:\'222\'', function () {
        assert.equal(true, validationModule.validateIntegerNumber('222'));
    });

    it('-Should get true from the function validationIntegerNumber when pass as arguments:\'0\'', function () {
        assert.equal(true, validationModule.validateIntegerNumber('0'));
    });

    it('-Should get false from the function validationFloatNumber when pass as arguments:\'222\'', function () {
        assert.equal(false, validationModule.validateFloatNumber('222'));

    });
    it('-Should get false from the function validationFloatNumber when pass as arguments:\'22.,3', function () {
        assert.equal(false, validationModule.validateFloatNumber('22,3'));
    });

    it('-Should get false from the function validationFloatNumber when pass as arguments:\'22s2.3\'', function () {
        assert.equal(false, validationModule.validateFloatNumber('22s3.3'));
    });

    it('-Should get false from the function validationFloatNumber when pass as arguments:\'s222\'', function () {
        assert.equal(false, validationModule.validateFloatNumber('s223.3'));
    });

    it('-Should get true from the function validationFloatNumber when pass as arguments:\'22.3\'', function () {
        assert.equal(true, validationModule.validateFloatNumber('22.3'));
    });

    it('-Should get true from the function validationFloatNumber when pass as arguments:\'0.3\'', function () {
        assert.equal(true, validationModule.validateFloatNumber('0.3'));
    });

    it('-Should get false from the function validationAlphanumericLowercase when pass as arguments:\'Ana\'', function () {
        assert.equal(false, validationModule.validateAlphanumericLowercase('Ana'));
    });

    it('-Should get false from the function validationAlphanumericLowercase when pass as arguments:\'FRANI\'', function () {
        assert.equal(false, validationModule.validateAlphanumericLowercase('FRANI'));
    });

    it('-Should get false from the function validationAlphanumericLowercase when pass as arguments:\'FRA_0\'', function () {
        assert.equal(false, validationModule.validateAlphanumericLowercase('FRA_0'));
    });

    it('-Should get false from the function validationAlphanumericLowercase when pass as arguments:\'FRANI!\'', function () {
        assert.equal(false, validationModule.validateAlphanumericLowercase('FRANI!'));
    });

    it('-Should get false from the function validationAlphanumericLowercase when pass as arguments:\' \'', function () {
        assert.equal(false, validationModule.validateAlphanumericLowercase(' '));
    });

    it('-Should get false from the function validationAlphanumericLowercase when pass as arguments:\'ana_89\'', function () {
        assert.equal(false, validationModule.validateAlphanumericLowercase('ana_89'));
    });

    it('-Should get false from the function validationAlphanumericLowercase when pass as arguments:\' ana89\'', function () {
        assert.equal(false, validationModule.validateAlphanumericLowercase(' ana89'));
    });

    it('-Should get false from the function validationAlphanumericLowercase when pass as arguments:\'ana89 \'', function () {
        assert.equal(false, validationModule.validateAlphanumericLowercase('ana89 '));
    });

    it('-Should get true from the function validationAlphanumericLowercase when pass as arguments:\'ana\'', function () {
        assert.equal(true, validationModule.validateAlphanumericLowercase('ana'));
    });

    it('-Should get true from the function validationAlphanumericLowercase when pass as arguments:\'ana89\'', function () {
        assert.equal(true, validationModule.validateAlphanumericLowercase('ana89'));
    });

    it('-Should get true from the function validationAlphanumericLowercase when pass as arguments:\'ana 89\'', function () {
        assert.equal(true, validationModule.validateAlphanumericLowercase('ana 89'));
    });

    it('-Should get true from the function validationAlphanumeric when pass as arguments:\'ana\'', function () {
        assert.equal(false, validationModule.validateAlphanumeric('FRA.NI'));
    });

    it('-Should get false from the function validationAlphanumeric when pass as arguments:\'FRA_?\'', function () {
        assert.equal(false, validationModule.validateAlphanumeric('FRA_?'));
    });

    it('-Should get false from the function validationAlphanumeric when pass as arguments:\'FRANI!\'', function () {
        assert.equal(false, validationModule.validateAlphanumeric('FRANI!'));
    });

    it('-Should get false from the function validationAlphanumeric when pass as arguments:\' \'', function () {
        assert.equal(false, validationModule.validateAlphanumeric(' '));
    });

    it('-Should get false from the function validationAlphanumeric when pass as arguments:\' ana89\'', function () {
        assert.equal(false, validationModule.validateAlphanumeric(' ana89'));
    });

    it('-Should get false from the function validationAlphanumeric when pass as arguments:\'ana89 \'', function () {
        assert.equal(false, validationModule.validateAlphanumeric('ana89 '));
    });

    it('-Should get true from the function validationAlphanumeric when pass as arguments:\'ana\'', function () {
        assert.equal(true, validationModule.validateAlphanumeric('ana'));
    });
    it('-Should get true from the function validationAlphanumeric when pass as arguments:\'ana89\'', function () {
        assert.equal(true, validationModule.validateAlphanumeric('ana89'));
    });
    it('-Should get true from the function validationAlphanumeric when pass as arguments:\'ana 89\'', function () {
        assert.equal(true, validationModule.validateAlphanumeric('ana 89'));
        ;
    });
    it('-Should get true from the function validationAlphanumeric when pass as arguments:\'Ana\'', function () {
        assert.equal(true, validationModule.validateAlphanumeric('Ana'));
    });
    it('-Should get true from the function validationAlphanumeric when pass as arguments:\'ANA\'', function () {
        assert.equal(true, validationModule.validateAlphanumeric('ANA'));
    });
    it('-Should get true from the function validationAlphanumeric when pass as arguments:\'ana_89\'', function () {
        assert.equal(true, validationModule.validateAlphanumeric('ana_89'));
    });

    it('-Should get false from the function validationPrice when pass as arguments:\'222d\'', function () {
        assert.equal(false, validationModule.validatePrice('222d'));
    });

    it('-Should get false from the function validationPrice when pass as arguments:\'22.3\'', function () {
        assert.equal(false, validationModule.validatePrice('22,3'));
    });

    it('-Should get false from the function validationPrice when pass as arguments:\'22,3\'', function () {
        assert.equal(false, validationModule.validatePrice('22,3'));
    });

    it('-Should get false from the function validationPrice when pass as arguments:\'$22,3\'', function () {
        assert.equal(false, validationModule.validatePrice('$22,3'));
    });

    it('-Should get true from the function validationPrice when pass as arguments:\'222\'', function () {
        assert.equal(true, validationModule.validatePrice('222'));
    });

    it('-Should get false from the function validationPrice when pass as arguments:\'22,3\'', function () {
        assert.equal(true, validationModule.validatePrice('22.3'));
    });
});
