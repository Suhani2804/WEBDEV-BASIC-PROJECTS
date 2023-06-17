const users=[
    {
        firstName:"Anshika",
        lastName:"hdv",
        age:"34",
    },
    {
        firstName:"A",
        lastName:"hv",
        age:"3",
    },
    {
        firstName:"Anna",
        lastName:"gyhv",
        age:"67",
    },
    {
        firstName:"Suhani",
        lastName:"v",
        age:"54",
    },
    {
        firstName:"Anshika",
        lastName:"hdv",
        age:"34",
    },
]

//print firstnames of users hose age is greater than 30

const filteredUsers=users.filter(function(user)
{
    return user.age>30;
})

const firstNames=filteredUsers.map(function(user)
{
    return user.firstName;
})
console.log(firstNames);

