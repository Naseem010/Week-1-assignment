// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const { throws } = require('assert');
var fs=require('fs');
const data="data is written";
fs.writeFile('text1.txt',data,(err)=>{
    if(err)throw err;
});