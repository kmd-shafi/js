//🚁 map is (return the value) and for each is not return the value

const coding=["js","py","c++","rubby"]

// const values=coding.forEach((shafi)=>{
// // console.log(shafi);
// return shafi
// })
// console.log(values);    //=> it's is not return the value 🚁


// const values=coding.map((shafi)=>{
// // console.log(shafi);
// return shafi
// })
// console.log(values);  //=> it's is  return the value 🚁



const mynum=[1,2,3,4,5,6,7,8]

// const sh=mynum.filter((num)=>{
//     return (num >4 )
// })
// console.log(sh)


// let array=[]
// mynum.forEach((i)=>{
//     if (i >4) {
//         array.push(i)
//     }
// })
// console.log(array);


//example 


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const bk=books.filter((bk)=>(bk.genre==="History"))
//   console.log(bk);

const bk=books.filter((bk)=>(bk.edition>=2000 && bk.genre==="History"))
console.log(bk);
