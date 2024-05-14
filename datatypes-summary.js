///primitive datatypes - 7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scarevalue= 100.2
const isloggedin= false
const outsidetemp= null
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')

const bigNumber= 23456789876543n

console.log(id===anotherId);
console.log(score);


//Reference (non-primitive datatypes) : Array, Objects , Functions


const languages = ["english", "spanish", "french", "hindi"];  // array
let myObj= {
    name: "shikha",
    age: 27,       //objects
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);
console.log(typeof outsidetemp);


//search ecma script to learn about more function//

