// const number=10;
// const number_2=20;
// let result=number+number_2;
// console.log(result);

// console.log('hello world')
// const order=()=>{
//     console.log('order functio');
//     return "breakfast"
// }

//from here we gt the order in new file ok so we will import 

//   ./ this it mzeans that wim go next to it so we have to follow this line 
const {order: importOrder, pay}= require('./newtips.js')
 
 const myOrder=importOrder();
 const myBill=pay(myOrder);
 console.log(myBill);
 console.log();