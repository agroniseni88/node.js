const fs=require('fs');

// fs is module done with npm node p managaer

// method fs is method it has 2 parametres
// this is readfile 
fs.readFile('target.txt', (err, data)=>{
    if(err){
        console.log('hello from error:' +err);
        return;
    }
    console.log(data.toString());
})

console.log('After reading file');