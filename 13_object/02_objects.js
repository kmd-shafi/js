//13=>methods

// const tinderUser=new Object()//=>singleton object 🏍️

// const tinderUser={}//=>non singleton object 🏍️ or object literals

// const tinderUser={}
const tinderUser=new Object()

tinderUser.id="123abc"
tinderUser.name="shafi"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gamil.com",
    fullName:{
        userFullname:{
            firstName:"mohammed",
            lastName:"shafi",
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName);


Object1={1:"a",2:"b"}
Object2={2:"a",3:"b"}

// const Object3= Object.assign({},Object1,Object2)
// const Object3= {...Object1,...Object2}

// console.log(Object3);


// const user=[
//     {
//         id:1,
//         email:"shafi@1245gmail.com"
//     }, 
//     {
//         id:1,
//         email:"shafi@1245gmail.com"
//     }, 
//     {
//         id:1,
//         email:"shafi@1245gmail.com"
//     }, 
//     {
//         id:1,
//         email:"shafi@1245gmail.com"
//     }
// ]
// user[0].email

console.log(Object.keys(tinderUser));//=>[ 'id', 'name', 'isLoggedIn' ] array=>data type 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//=>[ [ 'id', '123abc' ], [ 'name', 'shafi' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"));