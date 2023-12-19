//Difference between var let and const 
 
//var is part of ES5 and let and const are part of ES6 and we use both ES5+ES6 together
//var is function scoped : means a variable value can used at any time inside the function even of the varibale declared inside loop
function name(){
    for(var i=0;i<12;i++){
        console.log(i);
    }
    //We can access variable i here also
    console.log(i);
}
//window: Window is a pool of feature that is provided by the browser and is not part of the javascript but is still used
// var adds itself to the window object

// let and const are braces scoped : means they are declared within{} and can be used within that only not whole function
function name(){
    for(let i=0;i<12;i++){
        console.log(i);
    }
    //We can't access variable i here as it is defined as let .. it can be accessed within {} of for loop
    console.log(i);
}
// let and const dont add themselves to the window object



//Browser Context API:Browser provides us three things (window ,stack, heap)
// Heap:Whatever vartiables we are declaring has to be stored somewhere and for that we have heap , it basically stores the intermediate data


//Execution Context: Is basically a imaginary container which is created whenever a function is called .. it basically contains 3 things/varibles inside function/functions inside that function/Lexical Environment

//Lexical Environment: It basically maintains a chart of all the things that can be accessed by the function or the scope .... a child fuction can access everything of parent but vice-versa is false

//How to copy refernce values
var a=[1,2,3,4];
var b=[...a];  //here ... is called spread operator and whatever is written after it that value is copied in given variable

//How to copy objects
var a={name :"Rhaul"};
var b={...a};  //It will copy the object a


//Anything written in js comes under two categories 
//truthy
//falsy values ye hai: 0, false, undefined ,null ,NaN(Not a Number) ,document.all  ... all these values convert to false 
//truthy values are evrything other than falsy

if(-1){
    console.log("Hello"); //this will be executed because -1 is truthy
}
else{ console.log("Hi");}


//forEach loop is used whenever we have an array to traverse each element into it
var a=[1,2,3,4,5];
a.forEach(function(val){
    console.log(val+2);
})
//forEach makes changes to the temporary array a not the real 

//forin loop is used to traverse the property of objects
var a={
    name:"Raunea",
    age:12
};

//forin loop
for(var key in a){
    console.log(key,a[key]);
}


//Callback function
/*Aisa code jo baad mea chalta hai use hum ek function dedete hai ke jab complete hojana to ye function chala dena aur wo function jo hum dete hein wo ek normal fnc hota hai aur use kahte hai callback function
 */

setTimeout(function(){console.log("After 2 seconds")},2000) // run function after 2000miliseconds

// first class functions
// In JS we can use functions as arguments or values 

function abcd(a){
    a();
}

abcd(function val(){console.log("Hello");})


//How arrays are stored behind 
var arr=[1,2,34,5];
// They are stored as object
arr={
    0:1,
    1:2,
    2:34,
    3:5
}

//How to check when it is array and when object 
arr.isArray([]) //gives true if array
arr.isArray({}) //gives false if not array


//how to delete object property
var b={
    name:"Rahul"
}
//just write like this
delete b.name;