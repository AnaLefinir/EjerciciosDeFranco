/**
 * Created by Anita on 16/08/2016.
 */
var assert = require('assert');
var myModulesII = require("./Validation.js");


describe('Modules Validation Node', function(){
    it('Should get invalid Email 1',function(){
        assert.equal(false, myModulesII.validateEmail('ana?@gmail.com'));
    });

    it('Should get invalid Email 2',function(){
        assert.equal(false, myModulesII.validateEmail('ana.@gmail.com'));
    });


    it('Should get valid Email 1',function(){
        assert.equal(true, myModulesII.validateEmail('analefinir@gmail.com'));
    });

    it('Should get valid Email 2',function(){
        assert.equal(true, myModulesII.validateEmail('ana99@gmail.com'));
    });

    it('Should get valid Email 3',function(){
        assert.equal(true, myModulesII.validateEmail('ana_@gmail.com'));
    });


    it('Should get Invalid Number 1',function(){
        assert.equal(false, myModulesII.validateNumber('222d'));
    });
    it('Should get Invalid Number 2',function(){
        assert.equal(false, myModulesII.validateNumber('22,3'));
    });

    it('Should get Invalid Number 3',function(){
        assert.equal(false, myModulesII.validateNumber('x222'));
    });

    it('Should get Invalid Number 4',function(){
        assert.equal(false, myModulesII.validateNumber('22s3'));
    });


    it('Should get valid Number 1',function(){
        assert.equal(true, myModulesII.validateNumber('222'));
    });

    it('Should get valid Number 2',function(){
        assert.equal(true, myModulesII.validateNumber('22.3'));
    });


    it('Should get Invalid Integer 1',function(){
        assert.equal(false, myModulesII.validateIntegerNumber('2dd'));
    });

    it('Should get Invalid Integer 2',function(){
        assert.equal(false, myModulesII.validateIntegerNumber('22.3'));
    });

    it('Should get Invalid Integer 3',function(){
        assert.equal(false, myModulesII.validateIntegerNumber('x222'));});

    it('Should get Invalid Integer 4',function(){
        assert.equal(false, myModulesII.validateIntegerNumber('22s3'));
    });


    it('Should get valid Integer 1',function(){
        assert.equal(true, myModulesII.validateIntegerNumber('222'));
    });

    it('Should get valid Integer 2',function(){
        assert.equal(true, myModulesII.validateIntegerNumber('0'));
    });


    it('Should get Invalid Float 1',function(){
        assert.equal(false, myModulesII.validateFloatNumber('222'));

    });
    it('Should get Invalid Float 2',function(){
        assert.equal(false, myModulesII.validateFloatNumber('22,3'));
    });

    it('Should get Invalid Float 3',function(){
        assert.equal(false, myModulesII.validateFloatNumber('22s3.3'));
    });

    it('Should get Invalid Float 4',function(){
        assert.equal(false, myModulesII.validateFloatNumber('s223.3'));
    });


    it('Should get valid Float 1',function(){
        assert.equal(true, myModulesII.validateFloatNumber('22.3'));
    });

    it('Should get valid Float 2',function(){
        assert.equal(true, myModulesII.validateFloatNumber('0.3'));
    });


    it('Should get Invalid Alphanumeric Lowercase 1',function(){
        assert.equal(false, myModulesII.validateAlphanumericLowercase('Ana'));
    });

    it('Should get Invalid Alphanumeric Lowercase 2',function(){
        assert.equal(false, myModulesII.validateAlphanumericLowercase('FRANI'));
    });

    it('Should get Invalid Alphanumeric Lowercase 3',function(){
        assert.equal(false, myModulesII.validateAlphanumericLowercase('FRA_0'));
    });

    it('Should get Invalid Alphanumeric Lowercase 4',function(){
        assert.equal(false, myModulesII.validateAlphanumericLowercase('FRANI!'));
    });

    it('Should get Invalid Alphanumeric Lowercase 5',function(){
        assert.equal(false, myModulesII.validateAlphanumericLowercase(' '));
    });

    it('Should get Invalid Alphanumeric Lowercase 6',function(){
        assert.equal(false, myModulesII.validateAlphanumericLowercase('ana_89'));
    });

    it('Should get Invalid Alphanumeric Lowercase 7',function(){
        assert.equal(false, myModulesII.validateAlphanumericLowercase(' ana89'));
    });

    it('Should get Invalid Alphanumeric Lowercase 8',function(){
        assert.equal(false, myModulesII.validateAlphanumericLowercase('ana89 '));
    });


    it('Should get valid Alphanumeric Lowercase 1',function(){
        assert.equal(true, myModulesII.validateAlphanumericLowercase('ana'));
    });

    it('Should get valid Alphanumeric Lowercase 2',function(){
        assert.equal(true, myModulesII.validateAlphanumericLowercase('ana89'));
    });

    it('Should get valid Alphanumeric Lowercase 3',function(){
        assert.equal(true, myModulesII.validateAlphanumericLowercase('ana 89'));
    });


    it('Should get Invalid Alphanumeric 1',function(){
        assert.equal(false, myModulesII.validateAlphanumeric('FRA.NI'));
    });

    it('Should get Invalid Alphanumeric 2',function(){
        assert.equal(false, myModulesII.validateAlphanumeric('FRA_?'));
    });

    it('Should get Invalid Alphanumeric 3',function(){
        assert.equal(false, myModulesII.validateAlphanumeric('FRANI!'));
    });

    it('Should get Invalid Alphanumeric 4',function(){
        assert.equal(false, myModulesII.validateAlphanumeric(' '));
    });

    it('Should get Invalid Alphanumeric 5',function(){
        assert.equal(false, myModulesII.validateAlphanumeric(' ana89'));
    });

    it('Should get Invalid Alphanumeric 6',function(){
        assert.equal(false, myModulesII.validateAlphanumeric('ana89 '));
    });


    it('Should get valid Alphanumeric 1',function(){
        assert.equal(true, myModulesII.validateAlphanumeric('ana'));
    });
    it('Should get valid Alphanumeric 2',function(){
        assert.equal(true, myModulesII.validateAlphanumeric('ana89'));
    });
    it('Should get valid Alphanumeric 3',function(){
        assert.equal(true, myModulesII.validateAlphanumeric('ana 89'));;
    });
    it('Should get valid Alphanumeric 4',function(){
        assert.equal(true, myModulesII.validateAlphanumeric('Ana'));
    });
    it('Should get valid Alphanumeric 5',function(){
        assert.equal(true, myModulesII.validateAlphanumeric('ANA'));
    });
    it('Should get valid Alphanumeric 6',function(){
        assert.equal(true, myModulesII.validateAlphanumeric('ana_89'));
    });


    it('Should get Invalid Price 1',function(){
        assert.equal(false, myModulesII.validatePrice('222d'));
    });

    it('Should get Invalid Price 2',function(){
        assert.equal(false, myModulesII.validatePrice('22,3'));
    });

    it('Should get Invalid Price 3',function(){
        assert.equal(false, myModulesII.validatePrice('22,3'));
    });

    it('Should get Invalid Price 4',function(){
        assert.equal(false, myModulesII.validatePrice('$22,3'));
    });


    it('Should get valid Price 1',function(){
        assert.equal(true, myModulesII.validatePrice('222'));
    });

    it('Should get valid Price 2',function(){
        assert.equal(true, myModulesII.validatePrice('22.3'));
    });
});