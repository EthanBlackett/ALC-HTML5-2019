Game();
function Game() {
alert("Wonderful Sky: Text edition")
alert("By Micah Stock")
var start = confirm("Are you ready to start?")
var cheat = false;
var girlFollow = false;
var restart = false;
var dagger = false
var sil = 0;
var storeDaggerKnown = false;
    
function WinGame() {
    alert("Congratulations! You did the thing!");
    alert("That's it.")
    page.close
}
    
function GameOver(dead) {
    if (dead == true) {
        alert("You died!");
    } else {
        alert("Game Over!")
    }
    var restart = confirm("Do you want to restart?");
    if (restart == true) {
        Game();
    } else {
        page.close
    }
}
    NameQ();
    function NameQ() {
    
if (start == true) {
    while (1==1) {
    var playerName = prompt("What is the name of the person playing? \(This will not be your character's name.\)");
        
        if (playerName == "") {
            alert("That's an awful name.");
            NameQ();
        } else {
    var nameConfirm = confirm("So " + playerName + " is your REAL name?")
        if (nameConfirm == true) {
            
            if (playerName == "Ethan" || playerName == "Ethan") {
                alert("2")
            } else if (playerName == "Gabe" || playerName == "gabe") {
                alert("Spooky.")
            } else if (playerName == "Jacob" || playerName == "jacob") {
                alert("You're next.")
            } else if (playerName == "Micah") {
                alert("Really? That's awesome! You win instantly!")
                WinGame();
            } else if (playerName == "skip") {
                dagger = prompt("set dagger value");
                AfterTour();
            }
            
            ForestTown();
        } else {
         alert("Alright then.");
            NameQ();
        }
    ForestTown();
        }
    }
} else {
    alert("Then why'd you open the game you doughnut?");
    page.close
}
    }
    //Intro
function ForestTown() {
    
    var inventory = [null, "Wings", null, null, null]
    
var look = "You are in a clearing in a dense forest. You don't know where you are geographically though. To the west you see the ruins of an enormous city. It looks like it's been bombed in the past. The ruins look really, really old. There is also a dagger on the ground."
    
alert("The wind is blowing, and it's cold.   \nThe sun is just setting, but you just woke up. You are standing in a forest, surrounded by tall pine trees.   \nThere is a path that leads north.   \nThere is a dagger on the ground.")
   

    //FIRST INQUIRY
while (1==1){
var action = prompt("Where shall you go? You can use the commands \"North,\" \"East,\" \"South,\" \"West,\" or just the letters N E S W. \n You can also use the command \"Look\" or just L").toLowerCase();

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
    } else if (action == "take dagger" || action == "grab dagger") {
        
        if (dagger == true){
            alert("You already did.")
            break;
        } else if (dagger == false){
            dagger = true
            alert("You took the dagger.");
        }
    
        
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
        
        if(action == "enter" || action == "go inside" || action == "w" || action == "west" || action == "walk inside" || action == "walk in" || action == "go in") {
            alert("You walk inside the gates, still not spotting anyone. You hope no one hostile has spotted you.");
            InsideTown();
        } else if (action == "open gate" || action == "open gates" || action == "unlock gates" || action == "unlock gate") {
            
            alert("The gates are already open Stevie Wonder.");
            alert("You walk inside.");
            break;
        } else if (action == "south" || action == "s") {
            alert("You start heading back down the path, as the sky grows even darker.");
            alert("As you're walking, you hear noises from surrouding foliage.");
            alert("You walk faster.");
            alert("It's far too dark to see anything.");
            alert("Your foot hits a rock, and you twist around as you fall to the ground.");
            alert("When you stand up, you find that you aren't sure what direction you came from anymore.");
            alert("Something growls in your ear.");
            GameOver(true);
        } else if (action == "") {
            alert("You hecking doughnut, you didn't type anything.");
        //nice
        } else if (action == "look" || action == "l") {
            alert(look);
        } else {
            alert("I don't know what the hecc you're saying.");
        }
    }
    
    }
    
function InsideTown() {
    
    //INSIDE TOWN ENTRANCE
    
alert("The town looks alright, it's not exactly a metropolis, but... yeah. The path you were walking on turns into a road. The streets to your left and right are both blocked with police tape.");
    
var look = "There are lots of buildings, with poor looking kiosks in front of them. There are miscellaneous products displayed, with prices written neatly on signs all over. The kiosks, while dirty and battered, don't necessarily look old."

    while (1==1) {
           var action = prompt("What will you do?").toLowerCase();
        
        if (action == "die") {
            alert("You are eaten by a grue.");
            GameOver(true);
        } else if (action == "west" || action == "w") {
            alert("You head further into the town.");
            alert("\"Who are you?\" a small girl asked");
            alert("You can hear more voices coming from a ways ahead.");
            break;
        } else if (action == "look" || action == "l") {
            alert(look);
            alert("You can only go west and east, but you just came from the east.");
        } else if (action == "north" || action == "n" || action == "south" || action == "s") {
        alert("You can't go that way.")
        } else if (action == "east" || action == "e") {
        alert("Why would you go back there? There's nothing there for you.")
        } else if (action == "") {
            alert("Do you even know how to use a keyboard?")
        } else {
            alert("That makes no sense to me.")
        }
        }
    
    while (1==1) {
        var action = prompt("What do you say? \n \(Just type a number to select a dialogue option\) \n 1 -\"Just a wanderer\" \n 2 -shrug \n 3 -remain silent").toLowerCase();
        
    if (action == "1") {
        alert("\"Okay? Welcome to my home! My mom is over here, you should come talk to her!\" the little girl says, tugging your hand. You don't really have any choice but to follow.");
        girlFollow = true;
        break;
    } else if (action == "2") {
        alert("\"...alright?\"");
        alert("She walks off further into the town, glancing back at you.");
        break;
    } else if (action == "3") {
        alert("\"Mister?\"");
        alert("\"Can you speak?\"");
        alert("\"I'm assuming you're the protaganist because you're mute!\"");
        alert("She runs off, completely forgetting about you.");
        break;
    } else if (action == "") {
        alert("I literally gave you three options to choose from, and you still failed.");
    } else {
        alert("Please make sure that your eyes are open while playing \"Wonderful Sky: Text Edition\"");
    }
    }

    //LITTLE GIRL INTERACTION
    if (girlFollow == true) {
    alert("She leads you to a sort of plaza, full of people.");
    alert("You get a few strange looks, but other than that, no one really acknowledges your existence.");
        
    } else {
        alert("You wait for a bit as not to be creepy, then head further into the town yourself.");
    }
    
    alert("\"Hey, are you new here?\"");
    alert("A scruffy looking man approaches you.");
    
    var nameSilent = false;
    var what = false
    
    while (1==1){
    action = prompt("\"What's your name, son?\" \n 1 - \"What?\" \n 2 - remain silent").toLowerCase();
    
    if (action == "1") {
        if (what == false) {
        alert("\"What do you mean, 'What?' I asked:\"");
        what = true;
            nameSilent = false;
        } else {
            alert("\"Are you deaf or something?\"");
            alert("You shake your head 'no.'");
            break;
        }
        } else if (action == "2") {
            if (nameSilent == false) {
        alert("You don't say anything, for some reason.");
        alert("\"Did you hear me? I said:\"");
                var nameSilent = true;
    } else {
        alert("\"I'm not gonna get a word outta you, am I?\"");
        break;
    }
        } else if (action == "") {
            alert("You have a keyboard, right?");
        } else {
            alert("Excuse me what the FrIcK")
        }
    }
    //TALKING TO CARDD
    alert("\"Anyways, my name is Cardd");
    alert("\"You don't look very... civilized, to put it simply.\"");
    alert("\"You don't have a satchel on you.\"");
    alert("He looks back at the town.");
    alert("\"I suppose I should welcome you here.\"");
    alert("\"So uh, welcome to New Salem.\"");
    alert("\"We're a relatively large community of survivors.\"");
    alert("\"This is about as close as you can get to pre-bomb life.\"")
    
    while (1==1) {
    action = prompt("What will you say? \n 1 -\"Alright, is a tour of the town out of the question\" \n 2 -\"pre-bomb?\"").toLowerCase();
    
    if (action == "1") {
        alert("I suppose not, follow me.")
        TownTour();
    } else if (action == "2") {
        ExplainBombs();
    } else if (action == "") {
        alert("wait, that's illegal");
    } else {
        alert("you absolute walnut");
    }
    }

        }
    
    //OH HEY ACTUAL BRANCHING PATHS APPEAR!!!!!!!!!!!!
    
    //The tour of the town path
    function TownTour() {
        alert("\"So here in New Salem, we've got all of the standard town-y stuff.\"");
        alert("He walks you around the town, showing you all of the important building and stuff.");
        alert("\"...and here's my house, it's kinda small, but large houses are increasingly hard to come by, what with the semi-apocalyptic setting we have here.\"");
        AfterTour();
    }
    
    //Cardd explains the bombing of the Traveler Project
    function ExplainBombs() {
        alert("\"Oh.\"");
        alert("\"Have your parents never explained?\"");
        alert("He looks around.");
        alert("\"A while ago, like probably 50 or so years ago.\"");
        alert("\"There was this thing called the 'Traveller Project'\"");
        alert("\"The government was trying to travel to other dimensions, by powering a vortex through this clear artificial crystal called the 'Outer Curtain.'\"");
        alert("\"The Outer Curtain only tranfers light, not matter.\"");
        alert("\"When they sent people through it, their very existence was brought to an end. No one remember who they were.\"");
        alert("\"Because everyone forgot that they existed, they wouldn't know that they had already sent those people through, so they would go get more people...\"");
        alert("\"And send them through too.\"");
        alert("\"This went on for a while, and people only figured out what was happening after about a year or so.\"");
        alert("\"...\"");
        
        while (1==1) {
        action = prompt("\"Soo, do you want me to show you around or something?\"").toLowerCase();
        
        if (action = "yes" || action == "yeah" || action == "y") {
            alert("\"Alright then.\"")
            TownTour();
        } else if (action == "no" || action == "n") {
            alert("\"Ok then.\"");
            AfterTour();
        } else if (action == "") {
            alert("Remaining silent isn't an option here.");
        } else {
            alert("Nope. Try again.")
        }
    }
    }
    //after the tour and/or bomb explanation
    function AfterTour() {
        alert("Cardd walks away, in the general direction of a bazaar looking area.");
        
        look = "You are standing in a plaza of the town. There are busy looking people all around you, they don't seem to be paying you much attention. \n To your north, there is an open store. \n To the south, a movie theater.\(It's not looking too operational though. \n To the west\(forward\) there is more road.)"
        
        //skips to here
        while (1==1) {
        action = prompt("What do you do now?").toLowerCase();
        
        if (action == "look" || action == "l") {
            alert(look);
        } else if (action == "die") {
            alert("At this exact moment, the sun goes supernova, instantly vaporizing the entire earth. Thanks Obama.");
            GameOver(true);
        } else if (action == "n" || action == "north") {
            alert("You enter the humble store");
            FirstStore();
            break;
        } else if (action == "west" || action == "w") {
            alert("You continue forward.");
            TownWest();
        }
        }
    }
    
    function FirstStore() {
        look = "The lights are off, but the large front windows let in more than enough light. The place looks very modern, not dirty and dilapidated like most of the rest of the town. It also smells nice."
        alert("A bell dings as you open the door.")
        alert("\"Ah welcome! A kind looking woman says, facing the other way as she organized a back shelf.\"")
        
        //skips back for some reason
        if (dagger == true) {
            action = prompt("What do you want to do? \n 1 -Display penniless pockets \n 2 -Try to steal\(without using weapon\) \n 3 -Try to steal\(with dagger\) \n 4 -Leave").toLowerCase();
            
            if (action == "1") {
                if (storeDaggerKnown == false) {
                alert("You pull your pockets inside out, revealing that you have no money-- but also reavealing that you have a dagger on you.");
                alert("The shopkeeper responds politely, but firmly.");
                alert("\"I'm afraid I'm short on money too, I can't make an exception for anyone. Come back when you have some Sil.\"");
                alert("She eyes your dagger cautiously.")
                    storeDaggerKnown = true;
                } else {
                    alert("You pull your pockets inside out again.");
                    alert("\"Ain't gonna happen. Come back with money.\"")
                }
                
            } else if (action == "2") {
                if (storeDaggerKnown == false) {
                    alert("You walk around, browsing the wares. There's pretty standard stuff, like canned food and rusted trinkets. As you stroll, your eyes fall upon a bow. You know what you are about to do.")
                    alert("You reach your hand forward, making sure the shopkeep doesn't see you grab the weapon.");
                    alert("You estimate that you have about a 50/50 chance of pulling this off.");
                    alert("You clench your fingers over the bow, and quickly hide it in your abnormally large pockets.")
                    var stealChance = math.random();
                    if (stealChance > 0.5) {
                        alert("You slowly glance over at the shopkeeper.");
                        alert("She didn't see anything.");
                        alert("You start walking out, casually waving at her as you leave.");
                        alert("You hope she doesn't suspect anything, or notice that the bow is gone anytime soon.");
                    } else {
                        alert("You begin to glance over at the shopkeeper, but she is already right there next to you.");
                        alert("\"That's a nice bow you've found.\"");
                        alert("\hi");
                    }
                }
            }
        } else if (dagger == false) {
            action = prompt("What do you want to do? \n -Display empty pockets \n -Try to steal\(without using weapon\) \n -Leave");
        } 
        
        
    }
    
    function TownWest() {
        alert("You can smell food from the bazaar, you realize that you are very hungry");
        action = prompt("What will you do? \n 1 -Look for free food \n 2 -find Cardd").toLowerCase();
        
        if (action == "1") {
            alert("You set out to find food that doesn't cost money.")
        }
    }
            
        
    }

