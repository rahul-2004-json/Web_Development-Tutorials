// Write this code in google inspect ctrl+shift+i then sources tab then click on >> then click snippets
var tweet=prompt("Write your tweet below");
var l=tweet.length;
console.log("You have written "+l+" words "+(240-l)+" words are remaining");  // we can write console.log() to show it in temrinal

//How to slice string in javascript 
// we can use tweet.slice(starting index,ending index); to get the desired string.
alert(prompt("Write your tweet below").slice(0,140));

//printing name with slicing
var name=prompt("Name below:");
t=name.toUpperCase();
alert("Hello,"+t.slice(0,1)+name.slice(1,name.length));

//output: Hello,Rahul 


//Exercise 
var dogAge=prompt("Enter the dogs age:");
var humanAge=((dogAge-2)*4)+21;
alert("Your dog is "+humanAge+" years old in human years");



//Functions in Javascript
function bottles(){

}
//Parameterized functions 
function bottles (bottles){
    var money=bottles*1.5;
}

//Math.pow(base,Exponent);
//Math.round(2.5) round it to 3 and Math.round(2.4) to 2



//Exercise 
var n=Math.random();
n=n*6;
n=Math.floor(n)+1;
console.log(n);



//Exercise using random - Love percentage calculator
prompt("Enter 1st Name");
prompt("Enter 2nd Name");
var n=Math.random()*100;
n=Math.floor(n)+1;
alert("Your love score is: "+n);  // or console.log("Your love score is: "+n+"%");


//Exercise : Is a year leap year or not 
var n=prompt("Enter year");
function leapyear(year){
    if(year%4===0){
        if(year %100===0){
            if(year %400===0){
                return "Is a leap year";
            }
            else{
                return "Not a leap year";
            }
        }
        else{
            return " is a leap year";
        }
    }
    else{
        return " is not a leap year";
    }
}
console.log(leapyear(n));   // or alert(leapyear(n)); can also be written



//Exercise 
var arr=["rahul","anand","ansh","sarthak","aastik","parth","akshat"];
if(arr.includes("rahul")){
    alert("Welcome to the party");

}
else{
    alert("Oops you are not invited");
}


//Exercise : Fizz for 3 multiples and buzz for 5 multiples and fizzbuzz for 15 multiples
var output=[];
var count=1;
function fizzBuzz(){
    if(count % 3===0 && count % 5===0){
        output.push("fizzbuzz");
    }
    else if(count % 3===0){
        output.push("fizz");
    }
    else if(count % 5===0){
        output.push("buzz");
    }
    else{
        output.push(count);
    }
count++;
console.log(output);
    
}


// Exercise : Who is goin to pay for the bill
var arr=["Rahul","Angela","Nitin","Subhash","Mayank"];
function bill(arr){
    var numpeople=arr.length;
    var randompeople=arr[Math.floor(Math.random()*numpeople)];
    return randompeople+" is going to pay for the bill";
}


// Exercise :99 bottles of beer 
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}


//Fibonacci Numbers using JavaScript
var term=prompt("Enter Number of terms");
function fibonacci(term){
    var output=[];
    if(term===0){
        output=[0];
    }
    else if(term ===2){
        output=[0,1];
    }
    else{
        var n1=0;
        var n2=1;
        output=[0,1];
        for(var i=2;i<term;i++){
            output.push(output[n1]+output[n2]);
            n1++;
            n2++;
        }
    }
    alert(output);
}
fibonacci(term);