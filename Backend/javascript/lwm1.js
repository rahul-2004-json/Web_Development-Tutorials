//var const
var b="Rahul";
console.log(a);

const c=1; // can't  be changed 

//Hoisting : using a variable before its intitalization is called hoisting or moving of declaration of variable at top
console.log(a); // this will give 'undefined ' as output in the console
var a=12;  // here var a; is defined at first on top then a=12 is defined;

//Undefined : Which exists but is not yet defined
//Not defined : which doesn't exists 


//Types in Js
/*
primitives : all the variables without brackets 
reference : [] ,{},();  here whatever is copied to another variable is passed as reference
eg:

var a=[1,2,4,5];
var b=a;   
b.pop(); // here if we do b.pop() then the value will be changed in a also because it is passed as reference to b
*/

//Functions in JS
/*
function name(a){
    console.log(a);
}

*/


//Arrays in JS
/*
var arr=[1,2,3,4];
arr.splice(2,1)  // here it removes an element (index,kitne elements uss index se delete karne hein)
arr.unshift(1);  // adds elements in front of array
arr.shift(); //removes one elements from the front

*/


//Objects : When we want to describe everything about a particular subject
//1)Empty Object
var a={};
//2) Fileld Object
var a={
    //These are properties
    name :"Rahul",
    Height:6,
    address:"Noida",

    //Methods : ek esi property jiski value function ho...here gum is method
    gum :function hell(){}
};


//How to update the value of property in object
a.name="Harsh";
//How to acces the value in object
console.log(a.name);