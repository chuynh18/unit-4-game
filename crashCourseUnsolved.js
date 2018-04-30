"use strict";
// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable

var basicVariable = ""; // you didn't pay me enough for this variable to contain anything
var anotherBasicVariable = 420; // 420, on the house

// 2. ARRAYS
// ==========================================================

// Create an array of five strings

var fiveStrings = ["string one", "string two", "string three", "string four", "string five"];

// Create an array of five numbers

var fiveNumbers = [1, 2, 3, 4, 5]

// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"
for (var i = 0; i < 5; i++) {
    console.log("My name is Bob five times");
}


// Create a for loop that loops through your five string array

for (var i = 0; i < 5; i++) {
    console.log(fiveStrings[i]);
};

    // alternatively...

fiveStrings.forEach(function(chicken) {
    console.log(chicken);
});


// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function

function divideNumbers(n, m) {
    return n/m;
};

divideNumbers(174936720, 416516);

// alternatively...

var divideNumbersExpression = function(n, m) {
    return n/m;
};

divideNumbersExpression(27095172300, 64512315);

// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

// I am so sorry
var thisIsMyObjectThatContainsMyArrayAndMyFunctionSoThatICanUseVarThatEqualsThis = {array: [1, 2, 3, 420],
    thisFunctionTakesInAnArrayOfNumbersAndPrintsOutNumbers: function() {
        var that = this;
        that.array.forEach(function(lmnt) {
        alert(lmnt);
        })
    }
};

thisIsMyObjectThatContainsMyArrayAndMyFunctionSoThatICanUseVarThatEqualsThis.thisFunctionTakesInAnArrayOfNumbersAndPrintsOutNumbers()

// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object

// ugh, I don't have any appetite to create objects after what I did above

var obj = {key1: "value1", key2: "value2", key3: "value3"};

// Console log any three of the properties in that object

console.log(obj.key1);
console.log(obj.key2);
console.log(obj.key3);

// Create an Array of 5 Objects

var arrayFiveObj = [
    {keyA1: "valueA1", keyA2: "valueA2", keyA3: "valueA3"},
    {keyB1: "valueB1", keyB2: "valueB2", keyB3: "valueB3"},
    {keyC1: "valueC1", keyC2: "valueC2", keyC3: "valueC3"},
    {keyD1: "valueD1", keyD2: "valueD2", keyD3: "valueD3"},
    {keyE1: "valueE1", keyE2: "valueE2", keyE3: "valueE3"}
];

// Console log 3 properties for every one of the five objects

// maybe I am misunderstanding...?
console.log(arrayFiveObj[0].keyA1 + ", " + arrayFiveObj[0].keyA2 + ", " + arrayFiveObj[0].keyA3);
console.log(arrayFiveObj[1].keyB1 + ", " + arrayFiveObj[1].keyB2 + ", " + arrayFiveObj[1].keyB3);
console.log(arrayFiveObj[2].keyC1 + ", " + arrayFiveObj[2].keyC2 + ", " + arrayFiveObj[2].keyC3);
console.log(arrayFiveObj[3].keyD1 + ", " + arrayFiveObj[3].keyD2 + ", " + arrayFiveObj[3].keyD3);
console.log(arrayFiveObj[4].keyE1 + ", " + arrayFiveObj[4].keyE2 + ", " + arrayFiveObj[4].keyE3);

// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.

var basicButton = $("<button>");
basicButton.attr("type", "button");
$("body").append("<button>");

$(document).on("click", "button", function() {
    console.log("you clicked me");
})