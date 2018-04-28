"use strict";

// this holds the values for the crystals
var crystalArray;

// this holds the target value
var targetNum;

// this holds number of wins and losses
var winLoss;

/* this generates a random number between TWO and twelve (not starting at one, because one is lame)
 NOTE:  No need to call this function; the thing you want to do is handled by assignCrystalValues() */
var genCrystalNum = function() {
    return Math.floor(Math.random() * 11) + 2;
};

// this generates a random number between 19 and 120
var genTargetNum = function() {
    return Math.floor(Math.random() * 102) + 19;
};

// sanity tests for genCrystalNum() and genTargetNum().  also wrote them to get practice with objects
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
for this game, we're going with 4, because we have 4 crystals */
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

// run on game start and new game
var newGame = function() {
    targetNum = genTargetNum();
    console.log ("target value is: " + targetNum);
    assignCrystalValues(4);
}

newGame();

// this is the document ready thing
$(function() {

});