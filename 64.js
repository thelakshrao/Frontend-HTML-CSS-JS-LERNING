// node js moduls
const fs = require("fs");
let text = fs.readFileSync("file.txt" , "utf-8");
text = text.replace("understanding" , "knowing");

console.log("the content of the file is");
console.log(text);

console.log("creating a new file....");
fs.writeFileSync("laksh.txt" , text);