import { ZipCodeValidator } from './zip-modules';

let validator = new ZipCodeValidator();

console.log(validator.isAcceptable('123456'));