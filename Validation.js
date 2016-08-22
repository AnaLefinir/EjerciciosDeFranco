/**
 * Created by Anita on 13/08/2016.
 */


function validateEmail(string) {
    var regex = /\w+@\w+\.(com|net|org|edu)/;

    return regex.test(string);
};

function validateNumber(string) {
    var regex = /^\d+\.\d+$|^\d+$/;

    return regex.test(string);

};

function validateIntegerNumber(string) {
    var regex = /^\d+$/;

    return regex.test(string);
};

function validateFloatNumber(string) {
    var regex = /^\d+\.\d+$/;

    return regex.test(string);

};

function validateAlphanumericLowercase(string) {
    var regex = /^\b[a-z0-9]+\s[a-z0-9]+\b$|^\b[a-z0-9]+\b$/;

    return regex.test(string);
};

function validateAlphanumeric(string) {
    var regex = /^\b[\w]+\s[\w]+\b$|^\b[\w]+\b$/;

    return regex.test(string);
};

function validatePrice(string) {
    var regex = /^\d+\.\d+$|^\d+$/;

    return regex.test(string);
};

module.exports = {
    validateEmail: validateEmail,
    validateNumber: validateNumber,
    validateIntegerNumber: validateIntegerNumber,
    validateFloatNumber: validateFloatNumber,
    validateAlphanumericLowercase: validateAlphanumericLowercase,
    validateAlphanumeric: validateAlphanumeric,
    validatePrice: validatePrice,
};
