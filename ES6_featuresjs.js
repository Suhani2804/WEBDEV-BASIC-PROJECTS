//all these are ES6 features of javascript


//arrow functions
// function sum4(a,b)
// {
//     return a+b;
// }
//the below line is same is same as above whole function
//we remove function keyword and store the vaue in a variable and return keyword is replaced with arrow
//in brackets we have given the paramaters of the function sum
const sum4 = (a,b)=>a+b //here we assign values to variables and hence this is termed as function expression
const result=sum4(2,3);
console.log(result);
//difference in hoisting of arrow functions and function expression----->arrow functions are not hoisted
//that is u cannot call an arrow function before it is defined with values


///template literals
let firstname="Anshika";
let lastname="Aggarwal";
console.log(firstname+" "+ lastname);//string concatenation
//the below line is using template literals
console.log(`${firstname} ${lastname}`)//another way of writing the above statement using template literals
//we have enclosed the full statemnts between backticks (``)
//we have put a dollar sign in front of variables and variables are put inside curly brackets
//there is a space between both firstname and lastname declaration as we need to have a space in final ans
//this concatenation returns a string always
//let and const are also ES6 features

//destructuring
//function abc(obj)
// {
//     console.log(oject.firstname);
//     console.log(oject.lastname);
// }
//the above function can be written as belows and is known as object destructuring
function abc({firstname,lastname})
{
    console.log(firstname);
    console.log(lastname);
}
//the below is a json object
//this is how we declare objects in javascript
var obj={
    firstname:"Anshika",
    lastname:"Agarwal",
};


//spread
const numbers=[1,2,3,4,5];
const numbers2=[7,8,9,10,11];
//concat these two arrays
const result2=[...numbers,...numbers2];
//the above line takes all content of numbers and numbers2 array and concat it to store in a new array result2
//...selects all the content
console.log(result2);


//CLOSURES(VERY IMPORTANT FOR INTERVIEWS)
//closure is that inner function has access to lexical environment of outside function
//whenever there is a function inside a function the inside function has access to everything defined in the outside function
function a()
{
    c();
    function c()
    {
        console.log(b);
    }
}
const b=10;
a();
// in this function a is called in which c is called
// c wants to print value of b which is not present in the scope of function c---->it then goes to lexical enviromnment of parent and looks
// for b outisde c but in scope of a but it is not present in a also
// it then goes to the lexical environment of a that is from where a is called and we find b there and it is printed


