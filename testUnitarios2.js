/**
 * Created by Anita on 17/08/2016.
 */
var assert = require('assert');
var moduleSemVer = require("./SemVer.js");

describe('Testing SemVer constructor', function () {

    var semVerToTest;
    var majorObtFromSemVer;
    var minorObtFromSemVer;
    var revisionObtFromSemVer;

    var majorExp;
    var minorExp;
    var revisionExp;

    beforeEach(function () {
        semVerToTest = new moduleSemVer.SemVer(23, 11, 5);
        majorObtFromSemVer = semVerToTest.major;
        minorObtFromSemVer = semVerToTest.minor;
        revisionObtFromSemVer = semVerToTest.revision;

        majorExp = 23;
        minorExp = 11;
        revisionExp = 5;
    });


    it('-The semver created, its major value obtained, should be match with the major value expected', function () {
        assert.equal(majorExp, majorObtFromSemVer);
    });

    it('-The semver created, its minor value obtained, should be match with the minor value expected', function () {
        assert.equal(minorExp, minorObtFromSemVer);
    });

    it('-The semver created, its revision value obtained, should be match with the revision value expected', function () {
        assert.equal(revisionExp, revisionObtFromSemVer);
    });

    it('-Should be return a string with the members from the SemVer who call the function: convertToString', function () {

        //Arrange
        var stringExp = '23.5.6';
        var semverToTest = new moduleSemVer.SemVer(23, 5, 6);

        //Act
        var stringFromSemVerMethodConvert = semverToTest.convertToString();

        //Asserts
        assert.equal(stringExp, stringFromSemVerMethodConvert);
    })

    it('Should return a Error for a negative number pass as arguments in a SemVer', function () {
        assert.throws(function () {
            new moduleSemVer.SemVer(-1, 0, 5);
        }, /Error: negative number or not a number/)
    });

    it('Should return a Error when pass a string as arguments in a SemVer', function () {
        assert.throws(function () {
            new moduleSemVer.SemVer('hello', 0, 5);
        }, /Error: negative number or not a number/)
    });

    it('Should return a Error when pass a boolean as arguments in a SemVer', function () {
        assert.throws(function () {
            new moduleSemVer.SemVer(false, 0, 5);
        }, /Error: negative number or not a number/)
    });

    it('Should return a Error when pass a undefined as arguments in a SemVer', function () {
        assert.throws(function () {
            new moduleSemVer.SemVer(0, 5);
        }, /Error: negative number or not a number/)
    });


});
////////////////////////

describe('Testing parse function', function () {

    it('-The semver created, its major value obtained, should be match with the major value expected', function () {
        //Arrange
        var semVer = new moduleSemVer.SemVer(22, 33, 11);
        ;
        var majorExpectMatch = semVer.major;

        var parseSemVer;
        var majorObtFromParse;

        //Act
        parseSemVer = moduleSemVer.parse('22.33.11');
        majorObtFromParse = parseSemVer.major;

        //Assert
        assert.equal(majorExpectMatch, majorObtFromParse);
    });

    it('-The semver created, its minor value obtained, should be match with the minor value expected', function () {
        //Arrange
        var semVer = new moduleSemVer.SemVer(22, 33, 11);
        var minorExpectMatch = semVer.minor;

        var parseSemVer;
        var minorObtFromParse;

        //Act
        parseSemVer = moduleSemVer.parse('22.33.11');
        minorObtFromParse = parseSemVer.minor;

        //Assert
        assert.equal(minorExpectMatch, minorObtFromParse);

    });

    it('-The semver created, its revision value obtained, should be match with the revision value expected', function () {
        //Arrange
        var semVer = new moduleSemVer.SemVer(22, 33, 11);
        var revisionExpectMatch = semVer.revision;

        var parseSemVer;
        var revisionObtFromParse;

        //Act
        parseSemVer = moduleSemVer.parse('22.33.11');
        revisionObtFromParse = parseSemVer.revision;

        //Assert
        assert.equal(revisionExpectMatch, revisionObtFromParse);

    });

    it('-Should return error, when try to validate through regex, the string arguments: \'22.33.\'', function () {
        assert.throws(function () {
            moduleSemVer.parse('22.33.');
        }, /Error: Invalid String/);
    });

    it('-Should return error, when try to validate through regex, the string arguments: \'22.\'', function () {
        assert.throws(function () {
            moduleSemVer.parse('22.');
        }, /Error: Invalid String/);
    });

    it('-Should return error, when try to validate through regex, the string arguments: \'22\'', function () {
        assert.throws(function () {
            moduleSemVer.parse('22');
        }, /Error: Invalid String/);
    });

    it('-Should return error, when try to validate through regex, the string arguments: \'\'', function () {
        assert.throws(function () {
            moduleSemVer.parse('');
        }, /Error: Invalid String/);
    });

    it('-Should return error, when try to validate through regex, the arguments: 22,33,11(numbers)', function () {
        assert.throws(function () {
            moduleSemVer.parse(22, 33, 11);
        }, /Error: Invalid String/);
    });
});


describe('Testing greater function', function () {
    it('-Should return semver1', function () {
        //Arrange
        var semver1 = new moduleSemVer.SemVer(11, 22, 34),
            semver2 = new moduleSemVer.SemVer(11, 22, 33);

        //Act
        var greaterExpReturnSemver = moduleSemVer.greater(semver1, semver2);

        //Assert
        assert.equal(semver1, greaterExpReturnSemver);
    });

    it('-Should return semver2', function () {
        //Arrange
        var semver1 = new moduleSemVer.SemVer(11, 22, 34),
            semver2 = new moduleSemVer.SemVer(12, 22, 33);
        //Act
        var greaterExpReturnSemver = moduleSemVer.greater(semver1, semver2);
        //Assert
        assert.equal(semver2, greaterExpReturnSemver);
    });

    it('-Should return semver2', function () {
        //Arrange
        var semver1 = new moduleSemVer.SemVer(11, 22, 34),
            semver2 = new moduleSemVer.SemVer(11, 33, 33);

        //Act
        var greaterExpReturnSemver = moduleSemVer.greater(semver1, semver2);
        //Assert
        assert.equal(semver2, greaterExpReturnSemver);
    });

    it('-Should return error, when try to get the greater semver with two semver equal', function () {
        //Arrange
        var semver1 = new moduleSemVer.SemVer(11, 22, 34),
            semver2 = new moduleSemVer.SemVer(11, 22, 34);

        //Act

        //Assert
        assert.throws(function () {
            moduleSemVer.greater(semver1, semver2);
        }, /There are equals/);
    });
});

