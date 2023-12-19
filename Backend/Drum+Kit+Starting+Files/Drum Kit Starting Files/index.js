//Selects each elements with class drum
var num_drum=document.querySelectorAll(".drum").length;


//Looping throught all the elements and adding the event listener to each of them 
// for(var i=0;i<num_drum;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         //here 'this' helps in finding out which element got clicked
//         this.style.color="white";
//     })
// }


for(var i=0;i<num_drum;i++){

    //when button is pressed on screen
    document.querySelectorAll("button")[i].addEventListener("click",function(){

        //this is used to fetch the inner html written in button tag
        var buttoninner=this.innerHTML;
        makesound(buttoninner);
        buttonanimation(buttoninner);
       
    })


    //when a keyboard key is pressed
                                        //call back function
    document.addEventListener("keydown",function(event){
        makesound(event.key);
        buttonanimation(event.key);
    })


    //Function to make sound work
    function makesound(button1){
        switch (button1) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            
        
            default:
                alert("Incorrect button pressed");
                break;
        }
    }


    //Function to make button animation
    function buttonanimation(btn){
        //select the class of pressed button first
                                //this is like(".w")
        var activebtn=document.querySelector("."+btn);
        //add a new class in the selected buttons class 
        activebtn.classList.add("pressed");

        //set timeout function to remove the class added to give the animation effect
        setTimeout(function(){
            activebtn.classList.remove("pressed");
        },100)
    }
}




