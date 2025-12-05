//synchronous or blocking 
// -In synchronous line by line execution is performed

// Asyncronous or non-blocking
// -line by line ececution not granteed 
// -call back will be fire

const fs = require("fs");
fs.readFile("file.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("this is the massage");
//why this is the massage execute first?
// becoz compiler take time to read the file and 
// then move further in between the next para or we can say line will be executed.