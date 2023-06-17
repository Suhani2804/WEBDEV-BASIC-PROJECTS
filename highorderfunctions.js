// HIGHER ORDER FUNCTIONS:

//array:
// let a=[1,2,3,3,4]
//let b=["cat","dog"]
// //to print array
// for(let i=-p<a.length;i++)
// {
//     console.log(a[i]);
// }
//but if we dont want to use for loop to print the array js provides us with higher order functions to do the same
//higher order functions are functions that take other functions inside it
let a=[1,2,3,3,4]
//forEach
const obj=a.forEach(function(num)   //forEach does not return anything so we dont need this to be stored in a variable
{
    console.log(num);
})
//for each does not return anything so below statement gives undefined
console.log(obj);


//map
//map is used to tranform the contents of array
//map always returns a new array
//does not change the contents of the previous array

//to print the sqaure of every number in array
const squaredarray= a.map(function(num)
{
    return num*num;
});
console.log(squaredarray);
//here we store the map value in an array as it returns an array so we need to store it


//filter
//filter is used to take out contents of array based on conditions you passed
//filter returns an array
let z=[1,2,3,4,5,6,7,8,9];
//now to print even numbers:
const evennumbers= z.filter(function(val)
{
    return val % 2==0;
});
console.log(evennumbers);
// another method to do then same:
// function iseven(val)
// {
//     return val%2==0;
// }
// const evennumbers=a.filter(iseven);


//some
//some---->if one or more elements of the array are satisfying condition it returns true else it returns false
//used if only we need to check a condition and return true/false. does not return an array
const transactions=[1000,2000,-400,-689];
//whether any bank amount is negative
const result=transactions.some(function(num)
{
    return num<0;
})
console.log(result);


//every
//whether every element inside the array is passing the condition
const transactions2=[1000,2000,-400,-689];
//whether any bank amount is negative
const result2=transactions2.every(function(num)
{
    return num>0;
})
console.log(result2);


//reduce
//iterating over content of array and return one single result
let b=[1,2,3,4,5];
var sum=0;
// for(var i=0;i<b.length;i++)
// {
//     sum=sum+b[i];
// }
// console.log(sum);
//for above commands there is a higher order function
const result3=b.reduce(function(acc,curr)  //0+1=1,1+2=3,3+3=6,6+4=10,10+5=15
{
    return acc+curr;
})
console.log(result3);
//acc---->accumulator is where the result is stored(like sum of for loop)....can give it any name
//curr---->curr is the current array....can give it any name


//find
//returns element if it finds first elemnt that matches the condition
let s=[1,2,3,-4,6];
const result4=s.find(function(val)
{
    return val<0;
})
console.log(result4);


//fill
let q=[1,2,3,-4,6];

q.fill(5,1);
console.log(q);
