console.log(a);  //undefined
var a=10;
var b=20;

console.log(square(a));
//above line will get executed even before we declare the function this is known as hoisting in javascript
//hoisting: able to allocate memory to elemnts even before assigning value
//(HOISTING IS VERY IMPORTANT)

console.log(a); //10

function square(num)
{
    num*num;
}

var square1=(a);
var square2=(b);