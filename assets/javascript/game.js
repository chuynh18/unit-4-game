"use strict";

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
var cheerYouOn = ["Aren't you just winging it?", "Keep going!  Don't chicken out!", "Don't stop pecking these buttons!", "I'm just egging you on!", "Talk is cheep, so keep on clucking!", "One more cluck!  Don't be a chicken!", "Don't be stingy!  Spare me one more poultry click!"]
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
var changeChickens = function () {
    $("#chickenSpawn img:nth-child(1)").attr("value", crystalArray[0]);
    $("#chickenSpawn img:nth-child(2)").attr("value", crystalArray[1]);
    $("#chickenSpawn img:nth-child(3)").attr("value", crystalArray[2]);
    $("#chickenSpawn img:nth-child(4)").attr("value", crystalArray[3]);
};

// yes, I could simplify this with a loop but I got tired
var winMsg = function() {
    $("#chickenInstructions").text("You won!  But don't get cocky!");
    $("#chickenHeader").css("background-color", "rgba(170, 255, 170, 0.70)");
    $("#chickenScoreboard").css("background-color", "rgba(170, 255, 170, 0.70)");
    $(".betweenChickens").css("background-color", "#aaffaa");
    $("#chickenCrystals").css("background-color", "rgba(170, 255, 170, 0.70)");
    setTimeout(function() {
        $("#chickenHeader").css("background-color", "rgba(255, 230, 148, 0.70)");
    }, 100);
    setTimeout(function() {
        $("#chickenHeader").css("background-color", "rgba(170, 255, 170, 0.70)");
        $("#chickenScoreboard").css("background-color", "rgba(255, 230, 148, 0.70)");
    }, 200);
    setTimeout(function() {
        $("#chickenScoreboard").css("background-color", "rgba(170, 255, 170, 0.70)");
        $(".betweenChickens").css("background-color", "#ffe694");
    }, 300);
    setTimeout(function() {
        $(".betweenChickens").css("background-color", "#aaffaa");
        $("#chickenCrystals").css("background-color", "rgba(255, 230, 148, 0.70)");
    }, 400);
    setTimeout(function() {
        $("#chickenCrystals").css("background-color", "rgba(170, 255, 170, 0.70)");
    }, 500);
    setTimeout(function() {
        $("#chickenHeader").css("background-color", "rgba(255, 230, 148, 0.70)");
    }, 600);
    setTimeout(function() {
        $("#chickenHeader").css("background-color", "rgba(170, 255, 170, 0.70)");
        $("#chickenScoreboard").css("background-color", "rgba(255, 230, 148, 0.70)");
    }, 700);
    setTimeout(function() {
        $("#chickenScoreboard").css("background-color", "rgba(170, 255, 170, 0.70)");
        $(".betweenChickens").css("background-color", "#ffe694");
    }, 800);
    setTimeout(function() {
        $(".betweenChickens").css("background-color", "#aaffaa");
        $("#chickenCrystals").css("background-color", "rgba(255, 230, 148, 0.70)");
    }, 900);
    setTimeout(function() {
        $("#chickenCrystals").css("background-color", "rgba(170, 255, 170, 0.70)");
    }, 1000);
    setTimeout(function() {
        $("#chickenInstructions").text("Click these chickens!");
        $(".betweenChickens").css("background-color", "#ffe694");
        $("#chickenCrystals").css("background-color", "rgba(255, 230, 148, 0.70)");
        $("#chickenHeader").css("background-color", "rgba(255, 230, 148, 0.70)");
        $("#chickenScoreboard").css("background-color", "rgba(255, 230, 148, 0.70)");
    }, 4000);
};

var loseMsg = function() {
    $("#chickenInstructions").text("Looks like you've clucked one too many times!");
    for (var i = 0; i < 4; i++) {
        setTimeout(function() {
            $("#chickenHeader").css("background-color", "rgba(255, 170, 170, 0.70)");
            $("#chickenScoreboard").css("background-color", "rgba(255, 170, 170, 0.70)");
            $(".betweenChickens").css("background-color", "#ffaaaa");
            $("#chickenCrystals").css("background-color", "rgba(255, 170, 170, 0.70)");
        }, 1000*i);
        setTimeout(function() {
            $(".betweenChickens").css("background-color", "#ffe694");
            $("#chickenCrystals").css("background-color", "rgba(255, 230, 148, 0.70)");
            $("#chickenHeader").css("background-color", "rgba(255, 230, 148, 0.70)");
            $("#chickenScoreboard").css("background-color", "rgba(255, 230, 148, 0.70)");
        }, 1000*i+500);
    };
    setTimeout(function() {
        $("#chickenInstructions").text("Click these chickens!");
    }, 4000);
};

// ------ begin game logic -------

// this is the jQuery document ready thing (in shorthand form!), I think
$(function() {
// invoke newGame() on page load - only for the first round played per page load
newGame();
updateDisplay();
spawnChickens();

// this makes each chicken button increment chicken power by the appropriate amount when clicked
$(".chickenButton").on("click", function() {
    // console.log("clicked chicken value is " + $(this).attr("value"));
    chickenValue += parseInt($(this).attr("value"))
    updateDisplay();
    $("#chickenInstructions").text(cheerYouOn[Math.floor(Math.random()*cheerYouOn.length)]);
    // win
    if (chickenValue === targetNum) {
        winLoss[0]++;
        newGame();
        updateDisplay();
        changeChickens();
        winMsg();
    }
    // lose
    else if (chickenValue >= targetNum) {
        winLoss[1]++;
        newGame();
        updateDisplay();
        changeChickens();
        loseMsg();
    }
});

});