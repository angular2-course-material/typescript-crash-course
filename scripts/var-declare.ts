// var declarations
console.log('-----DECLARACION VAR-----');
var message = "Hello, world!";

function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  }
}

var g = f();
console.log('Scope de declaracion var: ', g());

// scope rules
function m(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

console.log('Scope de declaracion var: ', m(true));  // returns '10'
console.log('Scope de declaracion var: ', m(false)); // returns 'undefined'

// let declarations
console.log('-----DECLARACION LET-----');

let hello = "Hello!";

// scope rules

function n(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    //return b;
}

// re-declarations and shadowing

function q(x) {
    var x;
    var x;

    if (true) {
        var x;
    }
}

let p = 10;
//let p = 20; //Error!

/*
function f(x) {
    let x = 100; // error: interferes with parameter declaration
}

function g() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}
*/

// const declarations
console.log('-----DECLARACION CONST-----');
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}
console.log('original value: ', kitty);

// Error
/*kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};*/

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
console.log('changed value: ', kitty);

// Destructuring

// Array destructuring
console.log('-----DECLARACION DESCTRUCTURADA-----');
console.log('-----DECLARACION DESCTRUCTURADA: ARRAY-----');

let input = [1, 2];
let [first, second] = input;
console.log('ARRAY FIRST:', first); // outputs 1
console.log('ARRAY FIRST:', second); // outputs 2

function printArrayContent([first, second]: [number, number]) {
    console.log('ARRAY DESCTRUCTURED FUNCTION FIRST:', first);
    console.log('ARRAY DESCTRUCTURED FUNCTION FIRST:', second);
}

printArrayContent([3, 4]);

let [one, ...rest] = [1, 2, 3, 4];
console.log('ARRAY DESCTRUCTURED REST FIRST:', one); // outputs 1
console.log('ARRAY DESCTRUCTURED REST REST:', rest); // outputs [ 2, 3, 4 ]

// Object destructuring
console.log('-----DECLARACION DESCTRUCTURADA: OBJECTO-----');

let o = {
    a: "foo",
    b: 12,
    c: "bar"
}
let {a, b} = o;
console.log(a, b);

// Default values

function keepWholeObject(wholeObject: {a: string, b?: number}) {
    let {a, b = 1001} = wholeObject;
    console.log(a, b);
}

keepWholeObject({a: 'test'});
keepWholeObject({a: 'test', b: 5});

// Function declarations
console.log('-----DECLARACION DESCTRUCTURADA: FUNCIONES-----');

type C = {a: string, b?: number}
function e({a, b}: C): void {
    // ...
}

function r({a, b} = {a: "", b: 0}): void {
  console.log("Default values: ", a, b);
}
r(); // ok, default to {a: "", b: 0}

function t({a, b = 0} = {a: ""}): void {
    console.log(a, b)
}

t({a: "no", b: 5});
t({a: "yes"}); // ok, default b = 0
t(); // ok, default to {a: ""}, which then defaults b = 0
//t({b: "yes"}) // error, 'a' is required if you supply an argument
//t({}) // error, 'a' is required if you supply an argument


