// Symbol-----*

// let obj = {
//     sId : 1,
//     name : "Lakshay",
//     age : 21
// }

// let id = Symbol("sId");
// obj[id] = "001";

// if else-----*

// let score = 99;

// function getGrade(score){
//     if(score >= 90) return 'A+';
//     else if(score >= 80) return 'A';
//     else if(score >= 70) return 'B';
//     else if(score >= 60) return 'C';
//     else if(score >= 33) return 'D';
//     else return 'Fail';
// }

// console.log(getGrade(score));

//loop------*

// for(let i=1 ; i<=10 ; i++){
//     console.log(i);

// }

// let i = 10;
// // while( i != 0){
// //     console.log(i);
// //     i--;
// // }

// for(let i = 0 ; i <= 15 ; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// for(let i = 1 ; i<= 10 ; i++){
//     // console.log("5" + "X" + i + "=" + 5*i);
//     console.log(`5 X ${i} = ${i * 5}`);

// }

// let sum = 0;
// for(let i=1 ; i<=100 ; i++){
//     sum += i;
// }

// console.log(sum);

// let val = prompt("number: ")
// for(let i = 1 ; i<=val ; i++){
//     if(i % 2 !== 0){
//         console.log(`${i} is odd`);
//     }
//     else{
//         console.log(`${i} is even`);
//     }
// }

// for(let i=1 ; i<=20 ; i++){
//     if(i % 3 === 0){
//         continue;
//     }
//     console.log(i);

// }

// function

// //1.) function decleration

// function func(){

// }

// //1.) function epression

// let func = function(){

// }

// //1.) fat arrow function

// let func = ()=>{

// }

// default perameter
// function func (v1 = 0 , v2 = 0){
//     console.log(v1 + v2);

// }

// func(500 , 5000);

// rest (...)
// function func (...val){
//     console.log(val);

// }

// func(1 , 2, 2, 4,4,34, 5,4 );

// high order function

// function abcd(){
//     console.log("lakshay")
//     return function(){
//         console.log("yadav");

//     }
// }

// abcd()();

// pure function - agr kisi bhi function se bahr ki value na effect ho ton vo pure function hai

// function func(){
//     console.log("lakshay");
// }
// func();

// impure function - agr kisi bhi function se bahr ki value effect ho ton vo impure function hai
// let a = 12;
// function add(){
//     console.log(++a);

// }

// add();

// closures -
// function func(){
//     let a = 12;
//     return function(){
//         console.log(++a);

//     }
// }

// lexical scope-

// function abcd(){
//     let a = 12;
//     function efgh(){
//         let b = 13;
//         function ijkl(){
//             let c = 14;
//         }
//     }
// }

// IIFE = call krne ki jrurt nhi h imedately chlega

// (function(){
//     console.log("hehehe");
// })();

// hoisting differences between decleration and expression

// abcd();

// decleration -> ye chlega
// function abcd(){
//     console.log("hehehe");

// }

// expression -> ye nhi
//  let abcd = function(){
//     console.log("hehehe");

// }

// practice
// function getscore(...score){
//     let total = 0;
//     score.forEach(function (val){
//         total = total + val;
//     });
//     return total;
// }

// console.log(getscore(10 , 12 , 14 , 78));

// function abcd(val){
//     val();
// }

// abcd(function (){
//     console.log("hey");

// });

// build calulator using clousers

// function discountcaluter(dicount){
//     return function(price){
//         return price - price * (dicount / 100);
//     };
// }

// let a = discountcaluter(10);
// console.log(a(200));

//array

// let colors = ["green" , "yellow"];

// colors.splice(1 ,0 , "red");

// colors.sort();

// object

// let key = "age";

// const user = {
//     "firts_name": "laksh",
//     age: 22,
//     isEnrolled: true
// };

// let {"firts_name": firstsName} = user;

// const course = {
//     title: "javascript",
//     duration: "4 Weeks"
// };

// Object.entries(course).forEach(function(val){
//     console.log(val[0]+ ":" + val[1]);

// });

// function Question

// function isEven(num){
//     if(num % 2 === 0){
//         return true;
//     }
//     return false;
// }
// for make this above function shorter
// function isEven(num){
//     return num % 2 === 0;

// }

// console.log(isEven(89));

// let reverseString = function(str){
//     return str.split("").reverse().join("");
// }

// let reverseString = function(str){
//     let reverse = "";
//     for(let i=str.length -1 ; i>=0 ; i--){
//         reverse += str[i];
//     }
//     return reverse;
// }

// console.log(reverseString("lakshay"));

// function factorial(n){
//     if(n === 0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// function factorial(n){
//     let res = 1;
//     for(let i=1 ; i<=n ; i++){
//         res *= i;
//     }
//     return res;
// }

// console.log(factorial(3));

// function isPalindrom(str){
//     let l = 0;
//     let r = str.length-1;

//     while(l < r){
//         if(str[l] !== str[r]){
//             return false;
//         }
//         l++;
//         r--;
//     }
//     return true;
// }

// console.log(isPalindrom("werrew"));

// const isPalindrom = str => str === str.split("").reverse().join("");

// console.log(isPalindrom("weyghvbjrew"));

// let array = [1 , 22 , 54 , 23 , 32];

// function findLargestNum(arr){
//     let l = arr[0];
//     for(let i=1 ; i<arr.length ; i++){
//         if(l < arr[i]){
//             l = arr[i];
//         }
//     }
//     return l;
// }

// function findLargestNum(arr){
//     let sr = arr.sort(function(a,b){
//         return a-b;
//     });
//     return sr.pop();
// }

// console.log(findLargestNum(array));

// let arr = [1 , 2 , 3 , 2 , 4, 2 , 5 , 2 , 4 , 1 , 6];

// let sr = arr.sort(function(a,b){
//     return a-b;
// });
//     let res = [];
//     let z = 0;
// for(let i=0 ; i<sr.length ; i++){
//     if(sr[i] != sr[i+1]){
//         res[z++] = sr[i];
//     }
// }

// console.log(res);

// let uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);

// let arr = [1 , 2 , 3 , 2 , 4, 2 , 5 , 2 , 4 , 1 , 6];
// function sumArray(arr){
//     let sum = 0;
//     for(let i=0 ; i<arr.length ; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray(arr));

// let sum = arr.reduce(function(acc , val){
//     return acc+ val;
// }, 0);

// console.log(sum);

// let a = [1 , 2, 3 , 4 , 5];
// let k = 2;

// function answer(arr){
//     function reverse(arr , l , r){
//         while(l < r){
//             let temp = arr[l];
//             arr[l]  = arr[r];
//             arr[r] = temp;
//             // [arr[l], arr[r]] = [arr[r], arr[l]]; // short swap
//             l++;
//             r--;
//         }
//         return arr;
//     }
//     k = k % arr.length; // handle k > arr.length
//     reverse(arr , 0 , arr.length-1);
//     reverse(arr , 0 , k-1);
//     reverse(arr , k , arr.length-1);

//     return arr;
// }

// console.log(answer(a));

// const student = {
//     name : "lakshay",
//     age : 22,
//     marks : [90 , 99 , 89 , 98 , 100]
// }

// function avgMarks(mark){
//     let sum = 0;
//     for(let i=0 ; i<mark.length ; i++){
//         sum += mark[i];
//     }
//     let n = mark.length;
//     return sum / n;
// }

// console.log(avgMarks(student.marks));

// function isEmpty(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }
// function isEmpty(obj){
//     return Object.keys(obj).length === 0;
// }

// console.log(isEmpty(student));

// const people = [
//     { name: "lakshay" , age: 22},
//     { name: "mohit" , age: 23},
//     { name: "konark" , age: 25},
//     { name: "yash" , age: 27},
//     { name: "ryansh" , age: 20},
//     { name: "vijyant" , age: 21}
// ]

// function oldestPerson(arr){
//     let oldest = arr[0];

//     for(let i=0 ; i< arr.length ; i++){
//         if(arr[i].age > oldest.age){
//             oldest = arr[i];
//         }
//     }
//     return oldest.name;
// }

// console.log(oldestPerson(people));

function findNumberOfAllphabets(str) {
  let arr = str.split("");
  let newarr = [...new Set(arr)];

  let obj = {};
  for (let i = 0; i < newarr.length; i++) {
    obj[i] = newarr[i];
  }
  return obj;
}

console.log(findNumberOfAllphabets("apple"));
