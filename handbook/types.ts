/**
 * Types
 */
// Boolean
let isValid1 = true;
let isValid2: boolean = false;
let isValid3;
isValid3 = 'A';
isValid3 = true;
// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// String
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
// Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
// Tuple
let x: [string, number];
x = ["hello", 10];
// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
enum Color1 {Red = 1, Green, Blue}
let c1: Color1 = Color1.Green;
enum Color2 {Red = 1, Green = 2, Blue = 4}
let c2: Color2 = Color2.Green;
enum Color3 {Red = 1, Green, Blue}
let colorName: string = Color3[2];
// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
// Void
function warnUser(): void {
    alert("This is my warning message");
}
let unusable: void = undefined; //||null
// Null and Undefined
let u: undefined = undefined;
let n: null = null;
// Never
//let bar: never = (() => { throw new Error('Throw my hands in the air like I just dont care') })();
// Inferred return type is never
function fail() {
    return Error("Something failed");
}
// Type Assertions
let someStringAsAny: any = "this is a string";
let strLength: number = (<string>someStringAsAny).length;
let someStringAsAny2: any = "this is a string";
let strLength1: number = (someStringAsAny2 as string).length;