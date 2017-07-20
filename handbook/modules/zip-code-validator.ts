import {StringValidator as MainValidator} from './string-validator';

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements MainValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export default function (s: string) {
    return s.length === 5 && numberRegexp.test(s);
}