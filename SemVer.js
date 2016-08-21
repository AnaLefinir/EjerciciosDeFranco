/**
 * Created by Anita on 07/08/2016.
 */

myModuleI = {
    SemVer: function (major, minor, revision) {
        if (major < 0 || minor < 0 || revision < 0) {
            throw new Error('Error: negative number' );
        }else {
            this.major = major;
            this.minor = minor;
            this.revision = revision;
        }
        /* Code to see if major is valid, how implements that? And then, testing:

        var regex = /^[1-9][0-9][0-9]$|^[1-9][0-9]$|^[1-9]$/;
        if(regex.test(major)){
            return major;
        }else{
            return 'Value for major incorrect';
        }

        */

        this.convertToString = function () {
            var major = this.major.toString();
            var minor = this.minor.toString();
            var revision = this.revision.toString();

            var result = major + '.' + minor + '.' + revision;

            return result;
        };

    },

    parse: function (string) {

        var reg = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(string);

        if (!reg) {
            throw new Error('Error: Invalid String');
        } else {
            var majorInt = Number(/^(\d{1,3})/.exec(string)[1]);
            var minorInt = Number(/\.(\d{1,3})\./.exec(string)[1]);
            var revisionInt = Number(/\.(\d{1,3})$/.exec(string)[1]);

            var result = new myModuleI.SemVer(majorInt, minorInt, revisionInt);
            return result;
        }
    },

    create: function (majorInt, minorInt, revisionInt) {
        if(typeof(majorInt) !== 'number' || typeof(minorInt) !== 'number' || typeof(revisionInt) !== 'number'){
           throw new Error('Error: not a number input');
        }else {
            var result = new myModuleI.SemVer(majorInt, minorInt, revisionInt);
            return result;
        }
    },
        //Frani tiene que explicarme como hacerlo mejor:
    greater: function (SemVer1, SemVer2) {
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
    }
}

if(typeof module != 'undefined' && module.exports){
    module.exports = myModuleI;
}