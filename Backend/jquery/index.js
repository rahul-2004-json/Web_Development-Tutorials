//$jquery
//$ is nothing but short form of document.queryselector() in jquery

//we are using this to check if our jquery is ready to run 
//this ready code is not needed if you have included jquery already
$(document).ready(function(){
    //$("h1") is basically document.queryselector("h1");
    // $("h1").css("color","red");
})



//always keep CSS away from jquery or js instead add classes to elements using jquery 
$("h1").addClass("btn");
//how to add multiple classes
$("h1").addClass("btn margin");  //just give spaces between the classes name

//$("h1").removeClass("btn margin");

//How to check if element has a class
console.log($("h1").hasClass("btn"));  //gives true or false boolean


//How to manipulate text using jquery
$("h1").text("Bye");

//how to change the html with text
$(".h1").html("<em><b>Pls click me</b></em>");


//how to change the attributes
$("a").attr("href","https://www.yahoo.com/");

//when we write only the attribute we get the value asscoiated with it
console.log($("a").attr("href"));


//How to add eventlistner 
// $("button").click(function(){
//     $("h1").css("color","aqua");
// })


// $(document).keydown(function(event){
//     $("h1").text(event.key)
// })

//More easy way to add event listener is 
$(document).on("mouseover",function(){
    $("h1").css("color","purple");
})


//How to remove elements
$("button").remove();
