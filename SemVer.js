/**
 * Created by Anita on 07/08/2016.
 */


function SemVer(major, minor, revision) {
    this.major = major;
    this.minor = minor;
    this.revision = revision;

    var conditions = typeof(major) !== 'number' || major < 0 || typeof(minor) !== 'number' || minor < 0 || typeof(revision) !== 'number' || revision < 0;

    if (conditions) {
        throw new Error('Error: negative number or not a number');
    }


    this.convertToString = function () {

        return this.major + '.' + this.minor + '.' + this.revision;
    };

}

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
        revisionInt = Number(regImplements[3]);

        return new SemVer(majorInt, minorInt, revisionInt);
    }
}

function greater(semVer1, semVer2) {
    var greater = semVer2;
    if (semVer1.major == semVer2.major && semVer1.minor == semVer2.minor && semVer1.revision == semVer2.revision) {
        throw 'There are equals';
    } else if (semVer1.major > semVer2.major) {
        greater = semVer1;
        console.log(greater);
    } else if (semVer1.major == semVer2.major && semVer1.minor > semVer2.minor) {
        greater = semVer1;
    }else if(semVer1.major == semVer2.major && semVer1.minor == semVer2.minor && semVer1.revision > semVer2.revision){
        greater = semVer1;
    }
    return greater;
}

module.exports = {
    SemVer: SemVer,
    parse: parse,
    greater: greater,
};