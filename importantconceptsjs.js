//javascript output questions along with explanation and little theory

//datatypes----->var,let,const
//var----->globalscope
//let and const---->block scope----->values devlared using these are not declared in global scope
//let is a stricter version of var. const is even a stricter version of var and let.
//difference between let and const: let allows us to reassign values whereas const does not allow re assignment of values 


////hoisting: able to allocate memory to elemnts even before assigning value
//(HOISTING IS VERY IMPORTANT FOR INTERVIEWS)
//hoisting happens in function declaration only and not in function expression

// examples:
//below is an example of function declaration as function is just declared without being stored in a variable
console.log(a);  //undefined
var a=10;
var b=20;
console.log(square(a));
//above line will get executed even before we declare the function this is known as hoisting in javascript


console.log(a); //10
function square(num)
{
    return num*num;
}
console.log(square1);
console.log(square2);
var square1=square(a);
var square2=square(b);
console.log(square1);
console.log(square2);

//below example is for function expression when the value of function is stored in a variable

// console.log(xyz())----->this line gives error as function xyz is not declared.
// variable z is declared and memory is alloacted for it and
//hence it shows undefined in the below command
console.log(z);
var z=function xyz()
{
    console.log("javascript");
}
console.log(z);    //Output----->[Function: xyz]
console.log(z());

// Function expression and function declarartion:
// function expression---->when we assign functions to variables
//function expression ----->helps in variable hoisting
// const value=function()
// {}

// function declaration----->when we just write down the function without assigning it to variable
//function declaration--->helps in function hoisting
//basically function declarartion is hoisted while function expression is not hoisted
// fucntion AbortController()
// {}


//example:
console.log(x);
var x=10;
console.log(x);
//when js code is run
//first: memory allocation for x-------->x:undefined(that is x stores value undefined)
//second:output of above: undefined,10

//but is we declare x as let in the same code:
console.log(x);
let x=10;
console.log(x);
//this code gives reference error and not undefined as:
//memory allocation befpre initialisation is not done nfor variables declared using let and const
//once you assign values to these variables,memory allocation is done

console.log(a);//error as declared using let
console.log(b);//6
let a=10;
console.log(a);//10
var b=6;
console.log(b);//6
console.log(window.a);//undefined as a is declared in block scope becuase of lket and is not present is global zone
console.log(window.b); //prints 6 as value of var is stored in global scope
//window represents global scope as window is present in global scope.
//window.variable checks if element is present in global scope.
//window object is run inside browser while global objects are run inside node.js

//as soon as we create a blank js file it is called shortest js file as execution context is created on js file creation

//not defined!==undefined
//undefined is variable is declared but value not assigned
//not defined is variable is not even declared

//lexical environment: using lexical environment we can access those variables which are declared outside any function

//shadowing concept in notebook
