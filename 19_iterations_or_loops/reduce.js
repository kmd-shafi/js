const array=[1,2,3]


// const sum=  array.reduce(function ( acc, currval){
//     console.log(`acc:${acc} and currval:${currval}`);  //=> usingnormal call back funtion
//     return (acc+currval)
// },0)
// console.log(sum);

//or

// const sum=  array.reduce((acc,currval)=>acc+currval)  // using call back arrow function
// console.log(sum);

const shaopingCard=[
    {
        pen:"boll pen",
        price:5
    }, 
     {
        pen:"pencil",
        price:4
    },
    {
        pen:"scale",
        price:3
    }
]

const bill=shaopingCard.reduce(( acc,item)=>(item.price+acc),0)
console.log(bill);