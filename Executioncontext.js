//javascript output questions along with explanation and little theory

////hoisting: able to allocate memory to elemnts even before assigning value
//(HOISTING IS VERY IMPORTANT FOR INTERVIEWS)

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

// console.log(xyz())----->this line gives error as function xyz is not declared. variable is declared and memory is alloacted for it and
//hence it shows undefined
console.log(z);
var z=function xyz()
{
    console.log("javascript");
}
console.log(z);    //Output----->[Function: xyz]
console.log(z());


// function expression
// const value=function()
// {}

// function declarartion
// fucntion AbortController()
// {}
