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

var action = prompt("Where shall you go? You can use the commands North, East, South, West, or just the letters N E S W.").toLowerCase
    if(action == "north" || action == "n") {
   alert("yeet");
    }
    else if(action == "look" || action == "l")
    {
        alert(look);
    }
    alert("The path goes on for about a mile it seems. Your eyes strain to see in the growing darkness. You don't feel like you are in danger though.")
    }
}