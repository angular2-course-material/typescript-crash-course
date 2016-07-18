// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x+y; };

// Typing functions

function add2(x: number, y: number): number {
    return x + y;
}

let myAdd2 = function(x: number, y: number): number { return x+y; };

// Function type
let myAdd3: (x: number, y: number) => number =
    function(x: number, y: number): number { return x+y; };
    
// Optional parameters
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
//let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

// Default parameters
function buildName2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result4 = buildName2("Bob");                  // works correctly now, returns "Bob Smith"
let result5 = buildName2("Bob", undefined);       // still works, also returns "Bob Smith"
//let result6 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result7 = buildName2("Bob", "Adams");         // ah, just right

// Rest parameters
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");