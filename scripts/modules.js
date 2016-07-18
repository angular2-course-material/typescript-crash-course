"use strict";
var zip_modules_1 = require('./zip-modules');
var validator = new zip_modules_1.ZipCodeValidator();
console.log(validator.isAcceptable('123456'));
