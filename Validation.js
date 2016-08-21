/**
 * Created by Anita on 13/08/2016.
 */

myModuleII = {
    validateEmail : function(string){
        var regex = /\w+@\w+\.(com|net|org|edu)/.test(string);

        return regex;
    },

    validateNumber : function (string) {
        var regex = /^\d+\.\d+$|^\d+$/.test(string);

        return regex;

    },

    validateIntegerNumber :function (string) {
        var regex = /^\d+$/.test(string);

        return regex;
    },

    validateFloatNumber :function (string) {
        var regex = /^\d+\.\d+$/.test(string);

        return regex;

    },

    validateAlphanumericLowercase : function (string) {
        var regex = /^\b[a-z0-9]+\s[a-z0-9]+\b$|^\b[a-z0-9]+\b$/.test(string);

        return regex;
    },

    validateAlphanumeric: function (string) {
        var regex = /^\b[\w]+\s[\w]+\b$|^\b[\w]+\b$/.test(string);

        return regex;
    },

    validatePrice: function (string) {
        var regex = /^\d+\.\d+$|^\d+$/.test(string);

        return regex;
    },
};

if(typeof module != 'undefined' && module.exports){
    module.exports = myModuleII;
}