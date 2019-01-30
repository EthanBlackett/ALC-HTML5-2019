//oh yeah this is java btw
//var location = "start"
//var hp = 100;

Game();
function Game(){
alert("Wonderful Sky: Text edition")
alert("By Micah Stock")
confirm("Are you ready to start?")

    
ForestTown();
function ForestTown() {
    
var look = "You are in a clearing in a dense forest. You don't know where you are geographically though."
    
alert("The wind is blowing, and it's cold.");
alert("The sun is just setting, but you just woke up. You are standing in a forest, surrounded by tall pine trees.");
alert("There is a path that leads north.");

while (1==1){
var action = prompt("Where shall you go? You can use the commands North, East, South, West, or just the letters N E S W.").toLowerCase();

    if(action == "north" || action == "n") {
   alert("You begin on your way, hurrying through the night.");
        break;
    }
    else if(action == "look" || action == "l")
    {
        alert(look);
    } else if (action == "") {
        alert("You forgot to type something genius.")
    } else if (action == "west" || action == "w" || action == "east" || action == "e" || action == "south" || action == "s") {
        alert("There's nothing but trees in that direction.")
    } else {
        alert("I don't understand your nonsense.");
    }
}
    alert("The path goes on for about a mile it seems. Your eyes strain to see in the growing darkness. You don't feel like you are in danger though.");
    alert("In the distance, you see lights. You couldn't see them before, as it is darker now than it was then.");
    
    while (1==1) {
        
        var action = prompt("You reach the gates. You don't immediatly spot any guards, but they may just be hiding in the dark").toLowerCase();
        
        if(action == "enter" || action == "go inside") {
            alert("You walk inside the gates, still not spotting anyone. You hope no one hostile has spotted you.");
            break;
        } else if (action == "open gate" || action == "open gates" || action == "unlock gates" || action == "unlock gate") {
            alert("The gates are already open Stevie Wonder.");
            alert("You walk inside.");
            break;
        } else if (action == "") {
            alert("You hecking doughnut, you didn't type anything.")
        } else {
            alert("I don't know what the hecc you're saying.");
        }
    }
    
    }
}