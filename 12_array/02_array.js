//=>41 methods 

const names1=["shafi","shabana"]
const names2=["basha","ayesha"]

// names1.push(names2);
// console.log(names1);//=>[ 'shafi', 'shabana', [ 'basha', 'ayesha' ] ]
// console.log(names1[2][0]);//=>basha


// const names3=names1.concat(names2);
// console.log(names3);//=>[ 'shafi', 'shabana', 'basha', 'ayesha' ]

//spread => 🚁 ...

// const names4=[...names1,...names2]
// console.log(names4);

//

const names5=[1,2,3,[4,5,6],7,8,[9,8,[7,6,4]]]
 console.log(names5.flat(Infinity));//=>[
//     1, 2, 3, 4, 5, 6,
//     7, 8, 9, 8, 7, 6,
//     4
//   ]


console.log(Array.isArray("shafi"))//=>false

console.log(Array.from("shafi"));//=>[ 's', 'h', 'a', 'f', 'i' ]
console.log(Array.from({name:"shafi"}));//=>[]🚁


let one=100;
let two=200;
let three=300;
console.log(Array.of(one,two,three));//=>[ 100, 200, 300 ]