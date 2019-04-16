const fs=require('fs');

fs.writeFile('agrontext.txt', 'hello my friend', (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('file saved'); //when you clicked show u that u saved
});