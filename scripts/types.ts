// boolean 
let isDone: boolean = false;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
color = 'red';
// template strings
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence1: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`
let sentence2: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month."
console.log('Compare strings: \n', sentence1, '\n', sentence2);
 
// array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// enum
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log("Color:", colorName);
/*
enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green;
enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];
*/

// any
let notSure1: any = 4;
notSure1 = "maybe a string instead";
notSure1 = false; // okay, definitely a boolean
let notSure2: any = 4;
//notSure2.lol(); // okay, ifItExists might exist at runtime
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.