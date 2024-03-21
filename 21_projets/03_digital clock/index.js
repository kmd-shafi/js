const clock=document.querySelector("#clock")

// const date= new Date()
// console.log(date.toLocaleTimeString());

 const time=setInterval(()=>{
    const date= new Date()
// console.log(date.toLocaleTimeString());
clock.innerHTML=date.toLocaleTimeString()
},1000)

clearInterval(time);


