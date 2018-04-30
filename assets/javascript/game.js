"use strict";

// this is the jQuery document ready thing (in shorthand form!), I think
$(function() {

// ---------------------------------------------------------------------------
// this first section is generally where I hold my variables
// this holds the values for the crystals
var crystalArray;

// this holds the target value
var targetNum;

// this holds the player's current "score" from chicken clicks
var chickenValue;

// this holds number of wins and losses
var winLoss = [0, 0];

// this holds the URLs to the chicken images I'm using
var crystalURL = ["assets/images/ckn1.jpg", "assets/images/ckn2.jpg", "assets/images/ckn3.jpg", "assets/images/ckn4.jpg"]

// this holds "motivational" messages
var cheerYouOn = ["Aren't you just winging it?", "Keep going!  Don't chicken out!", "Don't stop pecking these buttons!", "I'm just egging you on!", "Talk is cheep, so keep on clucking!", "One more cluck!  Don't be a chicken!", "Don't be stingy!  Spare me one more poultry click!", "Today's your c-lucky day!", "Peck in order, and you just might win!", "Achieve beak performance and you just might win!"]

// I'm sorry
var clucker = ["assets/sounds/cluck01.webm", "assets/sounds/cluck02.webm", "assets/sounds/cluck03.webm", "assets/sounds/cluck04.webm", "assets/sounds/cluck05.webm", "assets/sounds/cluck06.webm", "assets/sounds/cluck07.webm", "assets/sounds/cluck08.webm", "assets/sounds/cluck09.webm", "assets/sounds/cluck10.webm", "assets/sounds/cluck11.webm", "assets/sounds/cluck12.webm", "assets/sounds/cluck13.webm"]
// creating the audioElement variable to simplify later code
var audioElement = document.createElement("audio");

// ---------------------------------------------------------------------------
// and this is generally where I hold my functions
// return a randomly selected string from the clucker array, which contains URLs pointing to the cluck sounds
var randomAudio = function() {
    return clucker[Math.floor(Math.random() * clucker.length)];
};

/* this generates a random number between TWO and twelve (not starting at one, because one is lame)
 NOTE:  No need to call this function; the thing you want to do is handled by assignCrystalValues() */
var genCrystalNum = function() {
    return Math.floor(Math.random() * 11) + 2;
};

/* this generates a random number between 19 and 120
NOTE:  No need to call this function, it's called by newGame() */
var genTargetNum = function() {
    return Math.floor(Math.random() * 102) + 19;
};

// sanity tests for genCrystalNum() and genTargetNum().  mainly wrote them to get practice with objects
var testGen = {
    i: 1
    ,
    /* this tests genCrystalNum()
    it succeeds for 2 ≤ n ≤ 12, otherwise loops until killed */
    crystal: function(n) {
        if (genCrystalNum() === n) {
            console.log("genCrystalNum() successfully generated the requested number after " + this.i + " iteration(s).");
            this.i = 1;
        }
        else {
            this.i++
            this.crystal(n);
        };
    },
    /* this tests genTargetNum()
    it succeeds for 19 ≤ n ≤ 120, otherwise loops until killed */
    target: function(n) {
        if (genTargetNum() === n) {
            console.log("genTargetNumber() successfully generated the requested number after " + this.i + " iteration(s).");
            this.i = 1;
        }
        else {
            this.i++
            this.target(n);
        };
    }
};

/* assigns crystals unique values between 2 through 11
argument is the number of values you want returned
IMPORTANT:  n must not exceed 11!
for this game, we're going with 4, because we have 4 crystals
NOTE:  No need to call this function, it's called by newGame() */
var assignCrystalValues = function(numOfCrystals) {
    crystalArray = []
    for (var i = 0; i < numOfCrystals; i++) {
        var randomCrystalNum = genCrystalNum();
        while (crystalArray.indexOf(randomCrystalNum) !== -1) {
            randomCrystalNum = genCrystalNum();
        }
        crystalArray.push(randomCrystalNum);
    };
    console.log("crystal values are: " + crystalArray);
};

/*
this is run on webpage load and on new round
resets chickenValue to 0, generates new target value and new values for each chicken
*/
var newGame = function() {
    chickenValue = 0;
    targetNum = genTargetNum();
    console.log ("target value is: " + targetNum);
    assignCrystalValues(4);
};

// this updates the page so the player actually sees what's going on
var updateDisplay = function() {
    $("#chickenPointsDisplay").text("Current chicken power: " + chickenValue);
    $("#chickenTargetScore").text("Target power: " + targetNum);
    $("#chickenWins").text("Wins: " + winLoss[0] + " ");
    $("#chickenLosses").text(", Losses: " + winLoss[1]);
};

// trying to prevent image dragging for usability reasons but I am guessing maybe the CSS onclick stuff is messing with it
$('img').on('dragstart', function(event) { event.preventDefault(); });

// this adds the <img> elements to the page with the appropriate attributes, so that the chicken buttons show up
var spawnChickens = function() {
    $("#chickenSpawn").empty();
    for (var i = 0; i < crystalArray.length; i++) {
        var chickenBtn = $("<img>");
        chickenBtn.attr("src", crystalURL[i]);
        chickenBtn.addClass("chickenButton");
        chickenBtn.attr("id", "chicken" + (i+1));
        chickenBtn.attr("alt", "Chicken picture " + (i+1));
        chickenBtn.attr("value", crystalArray[i]);
        $("#chickenSpawn").append(chickenBtn);
        // console.log(chickenBtn);
    };
};

// changes the value of the chickens - used for new games
// I gave up on doing it more elegantly, RIP
// but I learned a little more about the functionality that jQuery provides...  WORTH!?
// jk the above comment is no longer valid - i learned how to do eeet
// var changeChickens = function () {
//     $("#chickenSpawn img:nth-child(1)").attr("value", crystalArray[0]);
//     $("#chickenSpawn img:nth-child(2)").attr("value", crystalArray[1]);
//     $("#chickenSpawn img:nth-child(3)").attr("value", crystalArray[2]);
//     $("#chickenSpawn img:nth-child(4)").attr("value", crystalArray[3]);
// };

// making this was a waste of my time
var winMsg = function() {
    $("#chickenInstructions").text("You won!  But don't get cocky!");
    $("#chickenHeader").css("background-color", "rgba(170, 255, 170, 0.70)");
    $("#chickenScoreboard").css("background-color", "rgba(170, 255, 170, 0.70)");
    $(".betweenChickens").css("background-color", "#aaffaa");
    $("#chickenCrystals").css("background-color", "rgba(170, 255, 170, 0.70)");
    $("#chickenLeft").attr("src", "assets/images/winleft.png");
    $("#chickenRight").attr("src", "assets/images/winright.png");
    // this part is the loop that makes the blinking appear to "travel"
    for (var i = 0; i < 7; i++) {
        setTimeout(function() {
            $("#chickenHeader").css("background-color", "rgba(255, 230, 148, 0.70)");
        }, 500*i+100);
        setTimeout(function() {
            $("#chickenHeader").css("background-color", "rgba(170, 255, 170, 0.70)");
            $("#chickenScoreboard").css("background-color", "rgba(255, 230, 148, 0.70)");
        }, 500*i+200);
        setTimeout(function() {
            $("#chickenScoreboard").css("background-color", "rgba(170, 255, 170, 0.70)");
            $(".betweenChickens").css("background-color", "#ffe694");
        }, 500*i+300);
        setTimeout(function() {
            $(".betweenChickens").css("background-color", "#aaffaa");
            $("#chickenCrystals").css("background-color", "rgba(255, 230, 148, 0.70)");
        }, 500*i+400);
        setTimeout(function() {
            $("#chickenCrystals").css("background-color", "rgba(170, 255, 170, 0.70)");
        }, 500*i+500);
    }
    // this part makes the page look as it was when the game started
    setTimeout(function() {
        $("#chickenInstructions").text("Click these chickens!");
        $(".betweenChickens").css("background-color", "#ffe694");
        $("#chickenCrystals").css("background-color", "rgba(255, 230, 148, 0.70)");
        $("#chickenHeader").css("background-color", "rgba(255, 230, 148, 0.70)");
        $("#chickenScoreboard").css("background-color", "rgba(255, 230, 148, 0.70)");
        $("#chickenLeft").attr("src", "assets/images/pointleft.png");
        $("#chickenRight").attr("src", "assets/images/pointright.png");
    }, 4000);
};

var loseMsg = function() {
    $("#chickenInstructions").text("Looks like you've clucked one too many times!  Better cluck next time!");
    $("#chickenLeft").attr("src", "assets/images/loseleft.png");
    $("#chickenRight").attr("src", "assets/images/loseright.png");
    // blink blink blink blink
    for (var i = 0; i < 4; i++) {
        // blink to green...
        setTimeout(function() {
            $("#chickenHeader").css("background-color", "rgba(255, 170, 170, 0.70)");
            $("#chickenScoreboard").css("background-color", "rgba(255, 170, 170, 0.70)");
            $(".betweenChickens").css("background-color", "#ffaaaa");
            $("#chickenCrystals").css("background-color", "rgba(255, 170, 170, 0.70)");
        }, 1000*i);
        // ...and blink back to yellow
        setTimeout(function() {
            $(".betweenChickens").css("background-color", "#ffe694");
            $("#chickenCrystals").css("background-color", "rgba(255, 230, 148, 0.70)");
            $("#chickenHeader").css("background-color", "rgba(255, 230, 148, 0.70)");
            $("#chickenScoreboard").css("background-color", "rgba(255, 230, 148, 0.70)");
        }, 1000*i+500);
    };
    setTimeout(function() {
        $("#chickenInstructions").text("Click these chickens!");
        $("#chickenLeft").attr("src", "assets/images/pointleft.png");
        $("#chickenRight").attr("src", "assets/images/pointright.png");
    }, 4000);
};

// ---------------------------------------------------------------------------

// ------ begin game logic -------

    // invoke newGame() on page load - only for the first round played per page load
    newGame();
    updateDisplay();
    // create the chicken buttons
    spawnChickens();

    // this makes each chicken button increment chicken power by the appropriate amount when clicked
    $(document).on("click", ".chickenButton", function() {
        // console.log("clicked chicken value is " + $(this).attr("value")); // this was something I used for debugging
        // set the attribute of audioElement to a random cluck sound
        audioElement.setAttribute("src", randomAudio());
        // CLUCK
        audioElement.play();
        // increment chickenValue by the value of the clucked button
        chickenValue += parseInt($(this).attr("value"))
        // update the scoreboard so the player can see
        updateDisplay();
        // change the text to a randomly selected pun
        $("#chickenInstructions").text(cheerYouOn[Math.floor(Math.random()*cheerYouOn.length)]);
        // win
        if (chickenValue === targetNum) {
            // cock-a-doodle-doooooooooooo
            audioElement.setAttribute("src", "assets/sounds/win.webm");
            // okay technically this line is the one that goes cock-a-doodle-doooooooooooo
            audioElement.play();
            // you're winner!
            winLoss[0]++;
            //new game stuff
            newGame();
            updateDisplay();
            spawnChickens();
            // display win pun and blink obnoxiously
            winMsg();
        }
        // lose
        else if (chickenValue >= targetNum) {
            winLoss[1]++;
            newGame();
            updateDisplay();
            spawnChickens();
            // display lose pun and blink (a little less) obnoxiously
            loseMsg();
        }
    });

});