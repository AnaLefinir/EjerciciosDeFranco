/**
 * Created by Anita on 17/08/2016.
 */
var assert = require('assert');
var myModulesI = require("./SemVer.js");

describe('Testing SemVer constructor', function () {


    var semVer = new myModulesI.SemVer(23, 11, 5);
    var majorObt = semVer.major;
    var minorObt = semVer.minor;
    var revisionObt = semVer.revision;


    it('-Should be equal major', function () {
        assert.equal(23, majorObt);
    });

    it('-Should be equal minor', function () {
        assert.equal(11, minorObt);
    });

    it('-Should be equal revision', function () {
        assert.equal(5, revisionObt);
    });

    it('-Should be return a String from a SemVer', function () {
        assert.equal('23.11.5', semVer.convertToString());
    });

    it('Should return a Error for negative number', function () {
        assert.throws(function () {
            new myModulesI.SemVer(-1, 0, 5);
        }, /Error: negative number/)
    });
    /*Comments
     cuando se crea un SemVer, y se pasa como argumento un numero del estilo, por ejemplo, 05, el new SemVer lo guarda como 5 y no
     como 5.

     */
});

describe('Testing parse function', function () {

    var semVer = new myModulesI.SemVer(22, 33, 11);
    var majorExpect = semVer.major;
    var minorExpect = semVer.minor;
    var revisionExpect = semVer.revision;

    var parseSemVer = myModulesI.parse('22.33.11');
    var majorObt = parseSemVer.major;
    var minorObt = parseSemVer.minor;
    var revisionObt = parseSemVer.revision;

    it('-Should return equal major', function () {
        assert.equal(majorExpect, majorObt);
    });

    it('-Should return equal minor', function () {
        assert.equal(minorExpect, minorObt);
    });

    it('-Should return equal revision', function () {
        assert.equal(revisionExpect, revisionObt);
    });

    it('-Should return error for regex 1', function () {
        assert.throws(function () {
            myModulesI.parse('22.33.');
        }, /Error: Invalid String/);
    });

    it('-Should return error for regex 2', function () {
        assert.throws(function () {
            myModulesI.parse('22.');
        }, /Error: Invalid String/);
    });

    it('-Should return error for regex 3', function () {
        assert.throws(function () {
            myModulesI.parse('22');
        }, /Error: Invalid String/);
    });


});

describe('Testing create function', function () {


    var semVer = new myModulesI.SemVer(66, 55, 44);
    var majorExpect = semVer.major;
    var minorExpect = semVer.minor;
    var revisionExpect = semVer.revision;

    var createSemVer = myModulesI.create(66, 55, 44);
    var majorObt = createSemVer.major;
    var minorObt = createSemVer.minor;
    var revisionObt = createSemVer.revision;


    it('-Should return equal major', function () {
        assert.equal(majorExpect, majorObt);
    });

    it('-Should return equal minor', function () {
        assert.equal(minorExpect, minorObt);
    });

    it('-Should return equal revision', function () {
        assert.equal(revisionExpect, revisionObt);
    });

    it('-Should return error for incomplete arguments 1', function () {
        assert.throws(function () {
            myModulesI.create(66, 55);
        }, /Error: not a number input/);
    });

    it('-Should return error for incomplete arguments 2', function () {
        assert.throws(function () {
            myModulesI.create(66);
        }, /Error: not a number input/);
    });

    it('-Should return error for incomplete arguments 3', function () {
        assert.throws(function () {
            myModulesI.create();
        }, /Error: not a number input/);
    });


});

describe('Testing greater function', function () {


    var semver1 = new myModulesI.SemVer(11, 22, 33),
        semver2 = new myModulesI.SemVer(11, 22, 34),
        semver3 = new myModulesI.SemVer(11, 22, 33),
        semver4 = new myModulesI.SemVer(12, 22, 33),
        semver5 = new myModulesI.SemVer(11, 33, 33);


    var greaterExpsemver2 = myModulesI.greater(semver1, semver2),
        greaterExpsemver4 = myModulesI.greater(semver2, semver4),
        greaterExpsemver5 = myModulesI.greater(semver2, semver5),
        expReturnEqual = myModulesI.greater(semver1, semver3);




    it('-Should return semver2', function () {
        assert.equal(semver2, greaterExpsemver2);
    });

    it('-Should return semver4', function () {
        assert.equal(semver4, greaterExpsemver4);
    });

    it('-Should return semver5', function () {
        assert.equal(semver5, greaterExpsemver5);
    });

    it('-Should return equal', function () {
        assert.equal('There are equals', expReturnEqual);
    });
});