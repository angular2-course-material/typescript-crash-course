//Declare it, name it, set it.
var num = 2;

//Declare it, name it, annotate it, type it, set it.
//Initializing the value optionally.
var num: number = 2;

var any1; //Could be any type.
any1=1;
any1='a';

var num1: number; //Type annotation
var num2: number = 2; //Type annotation setting the value
var num3 = 3; //Type inference (number)
var num4 = num3 + 100;  //Type inference (number)
var str1 = num3 + 'a string';  //Type inference (string)

//var nothappy: number = num1 + 'somestring'; // ERROR!

function addNumbers(n1, n2, n3) {
    var result = n1 + n2 + n3;
    var msg = 'sum is: ' + result;
    console.log(msg);
}

/*
var addNumbers2 : (num1: number, num2:number, num3:number) => void 
    = (n1, n2, n3) {
        var result = n1 + n2 + n3;
        var msg = 'sum is: ' + result;
        console.log(msg);
}
*/

addNumbers(num2, num3, 'test');
//addNumbers2(num2, num3, 'test');

