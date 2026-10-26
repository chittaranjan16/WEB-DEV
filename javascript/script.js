console.log("helo javascript")


let a1 = 5;
let b1 = 6;
let name = "rectangle area";



// used to print in js like sop in java
console.log(a1*b1 + " " + name)



// methods in java / or functions
function sum(a , b , c) {
    console.log(a+b+c)
    console.log("function are nothing but methods ")
}


sum(2,4,6)
sum(13,5,78)


// we can store function inside a variable we call it
// arrow function
// reuseable

const func1 = (x)=>{
    console.log("it is a arrow function ," + x)
}


func1(56);
func1(67);



// Input Numbers
let a = Number(prompt("Enter your number 1 "));
let b = Number(prompt("Enter your number 2 "));
// Random Number

let random = Math.random();

let addition = a+b ;
let Subtraction = a-b;
let Multiplication =a*b;
let Division= a/b;
let Exponentiation = a**b;

// Condition
if (random <0.1){
    console.log("Addition Calculation : " , a-b) ;
    console.log("Subtraction Calculation : " , a/b) ;
    console.log("Multiplication Calculation : " , a+b );
    console.log("Division Calculation : " ,a**b ) ;
}

else{ 
    console.log("Addition Calculation : " , a+b) ;
    console.log("Subtraction Calculation : " , a-b) ;
    console.log("Multiplication Calculation : " , a*b );
    console.log("Division Calculation : " ,a**b ) ;
}


console.error("Something went wrong");


let age = 21;

if (age >= 18) {
    console.log("Adult");
}


var n1 = 21;
console.log(n1);

var n1 = 231;
console.log(n1);


function name1(){
    console.log("hello")
}
name1()
