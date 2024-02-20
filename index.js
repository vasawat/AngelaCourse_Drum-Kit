var numofdrum = document.querySelectorAll(".drum").length;
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");

for ( i = 0 ; i < numofdrum ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click" ,
    function drum () {
        var whoclick = this.innerHTML ;
        sound(whoclick);
        kapip(whoclick);
      }
    );
}

document.addEventListener("keypress" , function (a){
    sound(a.key);
    kapip(a.key);
}
);

function sound (key) {
    switch (key) {
        case "w":
            crash.play();
            break;

        case "a":
            kick.play();
            break;

        case "s":
            snare.play();
            break;
            
        case "d":
            tom1.play();
            break;
            
        case "j":
            tom2.play();
            break;
            
        case "k":
            tom3.play();
            break;
            
        case "l":
            tom4.play();
            break;    
    
        default:
            break;
    }
}

function kapip (abcd) {
    var active = document.querySelector("." + abcd);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    } , 100);
    
}
