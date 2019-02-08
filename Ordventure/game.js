//oh yeah this is java btw
//var location = "start"
//var hp = 100;

Game();
function Game() {
alert("Wonderful Sky: Text edition")
alert("By Micah Stock")
var start = confirm("Are you ready to start?")

if (start == true) {
    ForestTown();
} else {
    alert("Oh. Then why did you start the game you doughnut?");
    page.close
}

    //Intro
function ForestTown() {
    

    
var look = "You are in a clearing in a dense forest. You don't know where you are geographically though. To the west you see the ruins of an enormous city. It looks like it's been bombed in the past. The ruins look really, really old. There is also a dagger on the ground."
    
alert("The wind is blowing, and it's cold.");
alert("The sun is just setting, but you just woke up. You are standing in a forest, surrounded by tall pine trees.");
alert("There is a path that leads north.");

    //FIRST INQUIRY
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
    } else if (action == "east" || action == "e" || action == "south" || action == "s") {
        alert("There's nothing but trees in that direction.")
    } else if (action == "west" || action == "w") {
        alert("The ruins of a city. It's no use trying to get there, there's a lot of forest in the way.")
    } else {
        alert("I don't understand your nonsense.");
    }
}
    alert("The path goes on for about a mile it seems. Your eyes strain to see in the growing darkness. You don't feel like you are in danger though.");
    alert("In the distance, you see lights. You couldn't see them before, as it is darker now than it was then.");
    
    var look = "It is very dark now, the only meaningful source of light is the floodlights on the other side of the gates."
    
    //AT THE GATES
    
    while (1==1) {
        
        var action = prompt("You reach the gates, they are on your left. You don't immediatly spot any guards, but they may just be hiding in the dark").toLowerCase();
        
        if(action == "enter" || action == "go inside" || action == "w" || action == "west") {
            alert("You walk inside the gates, still not spotting anyone. You hope no one hostile has spotted you.");
            break;
        } else if (action == "open gate" || action == "open gates" || action == "unlock gates" || action == "unlock gate") {
            
            alert("The gates are already open Stevie Wonder.");
            alert("You walk inside.");
            break;
        } else if (action == "") {
            alert("You hecking doughnut, you didn't type anything.")
        //nice 
        } else if (action == "look" || action == "l") {
            alert(look);
        } else {
            alert("I don't know what the hecc you're saying.");
        }
    }
    
    }
    
InsideTown();
function InsideTown() {
    
    //INSIDE TOWN ENTRANCE
    
alert("The town looks alright, it's not exactly a metropolis, but... yeah. The path you were walking on turns into a road. The streets to your left and right are both blocked with police tape.")
    
var look = "There are lots of buildings, with poor looking kiosks in front of them. There are miscellaneous products displayed, with prices written neatly on signs all over. The kiosks, while dirty and battered, don't necessarily look old."

    while (1==1) {
           var action = prompt("What will you do?").toLowerCase();
        
        if (action == "die") {
            alert("You are eaten by a grue. The end, you died, you awful person.")
            page.close
        } else if (action == "west" || action == "w") {
            alert("You head further into the town.");
            alert("You begin to hear voices coming from a ways ahead.")
            break;
        } else if (action == "look" || action == "l") {
            alert(look);
            alert("You can only go west and east, but you just came from the east.")
        } else if (action == "") {
            alert("Do you even know how to use a keyboard?")
        } else {
            alert("That makes no sense to me.")
        }
        }
    
    //FURTHER INTO TOWN
    
    alert("\"Hey you there!\"");
        }
}