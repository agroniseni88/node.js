const lodash=require('lodash');
const myPeople=[
    {name: "Jhon Doe", age: 25},
    {name: "Agron Iseni", age: 30}
]

// person in this case it signify the justconsole log we can use just:
//*** */const people =lodash.map(myPeople); console.log(people);****

const people =lodash.map(myPeople, (person)=>{
    console.log(person);
})