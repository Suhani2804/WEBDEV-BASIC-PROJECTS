// this keyword in js

//object 1
let user={
    firstname: "anshika",
    lastname: "agarwal",
    hobbies:["swimming","dancing"],
    printfullname()
    {
        console.log(this);//prints the whole user object...i.e. the firstname,lastname and function printfullname()
      return  `${this.firstname} ${this.lastname}`;//we have to use this and not in other case as here we have declared first and lastname inside the object
       //and in the previous case we had declared it outside the object
    },
    //this is global scoped however within object it is object scoped thus this.firstname=user.firstname
    //thus this helps us to access object variables within the object
    showhobbies()
    {
        console.log(this.firstname);
        this.hobbies.forEach((hobby)=>
        {
            console.log(this.firstname);
            console.log(hobby);
        })
    },
};
user.printfullname();

//binding
let printDetails=function(hobby)
{
    console.log(this.printfullname()+ "loves"+ hobby);
}
let details=printDetails.bind(user); 
details("cooking");
//basically printdeatils is not in user object but we need to access printfullname which is present is unser object
//for this we bind our function to the object and helps us to access printfullname

//borrowing
const user2={
    firstname:"ankit",
    lastname:"gupta",
};
// let user2details

//in call we can pass parameters normally whereas in appy we need to pass parameters 