console.log('this is my 53 html file');

function greet(name , greettext = "greeting from javascript"){
    // this is the defalut arrgument 
    let name1 = 'NAME'; 
    //  its scope is , in this function only
    console.log(greettext + " " + name);
    console.log(name + " is a good boy");
}
 
function sum(a,b,c){
    let d = a + b + c;
    return d;
    // this line will never execute (unreachable)
    // console.log("fution sum");
}

let name = "laksh";
let name1 = "laksh";
let name2 = "laksh";
let name3 = "laksh";
let greettext = "Good Morning";
greet(name , greettext);
greet(name1 , greettext);
greet(name2 , greettext);
greet(name3);

// let returnval = sum(1,2,3);
// console.log(returnval);


// function detail(name){
//     let names = "Laksh";
//     return name;
// }

// let returnval = detail(name);
// console.log(returnval);

// function minimum(N){
//     let num = N;
    
//     if(num>18){
//         return num;
//     }
//     else if(num==2){
//         return num;
//     }
//     else{
//         return num;
//     }
// }

// let returnval = minimum(12);
// console.log(returnval);