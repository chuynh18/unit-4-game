"use strict";

// these hold the values for the Cryst... I mean Chickens
var chickenCrystal1;
var chickenCrystal2;
var chickenCrystal3;
var chickenCrystal4;

// this generates a random number between TWO and twelve (not starting at one, because one is lame)
var genRandomCrystalNum = function() {
    return Math.floor(Math.random() * 11) + 2;
};

// this generates a random number between 19 and 120
var genRandomTargetNum = function() {
    return Math.floor(Math.random() * 102) + 19;
};

/* this tests genRandomCrystalNum()
it succeeds for 2 ≤ n ≤ 12 and loops infinitely for all other values
...at least until it's killed off by the JavaScript interpreter. RIP
I wrote this just to sanity check my work. */

var testCrystal = function(n) {
    if (genRandomCrystalNum() === n) {
        console.log("genRandomCrystalNum() successfully tested");
    }
    else {
        testCrystal(n);
    }
    
};

/* this tests genRandomTargetNum()
it succeeds for 19 ≤ n ≤ 120, otherwise it loops until killed */
var testTarget = function(n) {
    if (genRandomTargetNum() === n) {
        console.log("genRandomTargetNum() successfully tested");
    }
    else {
        testTarget(n);
    }
    
};

$(function() {

}
);