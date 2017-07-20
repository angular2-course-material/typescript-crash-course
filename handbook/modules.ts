import { ZipCodeValidator } from './modules/zip-code-validator';
import * as validator from "./modules/zip-code-validator";
//import validator from "./ZipCodeValidator";
//let myValidator = new validator();
import newValidator from "./modules/zip-code-validator";


let myValidator = new validator.ZipCodeValidator();

console.log(new ZipCodeValidator().isAcceptable('asdasdasd'));
console.log(myValidator.isAcceptable('1234'));
console.log(newValidator('12345'));