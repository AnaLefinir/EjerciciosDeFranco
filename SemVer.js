/**
 * Created by Anita on 07/08/2016.
 */


function SemVer(major, minor, revision) {
    this.major = major;
    this.minor = minor;
    this.revision = revision;

    var conditions = major < 0 || typeof(major) !== 'number' || minor < 0 || typeof(minor) !== 'number' || typeof(revision) !== 'number' || revision < 0;

    if (conditions) {
        throw new Error('Error: negative number or not a number');
    }


    this.convertToString = function () {

        return this.major + '.' + this.minor + '.' + this.revision;
    };

};

function parse(string) {

    var regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    var regImplements = regex.exec(string);
    var majorInt;
    var minorInt;
    var revisionInt;

    if (!regImplements) {
        throw new Error('Error: Invalid String');
    } else {
        majorInt = Number(regImplements[1]);
        minorInt = Number(regImplements[2]);
        revisionInt =Number(regImplements[3]);

        return new SemVer(majorInt, minorInt, revisionInt);
    }
};

//Frani tiene que explicarme como hacerlo mejor:

/*
function greater(SemVer1, SemVer2) {
    if (SemVer1.major > SemVer2.major) {
        return SemVer1;
    } else if (SemVer1.major < SemVer2.major) {
        return SemVer2;
    } else if (SemVer1.major == SemVer2.major) {
        if (SemVer1.minor > SemVer2.minor) {
            return SemVer1;
        } else if (SemVer1.minor < SemVer2.minor) {
            return SemVer2;
        } else if (SemVer1.minor == SemVer2.minor) {
            if (SemVer1.revision > SemVer2.revision) {
                return SemVer1;
            } else if (SemVer1.revision < SemVer2.revision) {
                return SemVer2;
            } else if (SemVer1.revision == SemVer2.revision) {
                return 'There are equals';
            }
        }
    }
};
*/

module.exports = {
    SemVer: SemVer,
    parse: parse,
    //greater: greater,
};