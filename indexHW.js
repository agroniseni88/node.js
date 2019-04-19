# node.js
week1

//i created the package of json
//here it is also the array with the name and ages

const lo = require('lodash');
let array1=
[
  {name: 'John Doe', age: 25},
  {name: 'RICHARD Dreb', age: 25},
  {name: 'Romeo julian', age: 30},
  {name: 'Agron Iseni', age: 30}
]
console.log(array1);

//Sort the array in a descending order based on the age.

const myOrderedArray = lo.sortBy(array1, o=>o.age);
console.log(myOrderedArray)

//desc it means descending asc ascending 
const chars = lo.orderBy(array1, 'age', 'desc'); 
console.log(chars);

//the oldest age in array
const oldestAge = lo.maxBy(array1, 'age');
console.log(oldestAge);

//the youngest ages
var oldestAges = lo.minBy(array1, 'age');
console.log(oldestAges);

//remove from an array the oldest age
const theOldestAge = lo.remove(array1, oldestAge);

console.log(theOldestAge);
console.log(array1);

// //group by age
const groupByAge = lo.groupBy(array1, 'age');
console.log(groupByAge);

const rvTheOldestAge=lo.remove(array1, (removeoldPerson)=>{
    return removeoldPerson === oldestAge
})

console.log(rvTheOldestAge);
console.log(array1);

//*****************************creating file and challenges*********************************** */

//created the txt people:
const fs=require('fs');


fs.readFile('people.txt', "dxfcg", (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('file saved'); //when you clicked show u that u saved
});

