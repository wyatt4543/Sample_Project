/*
Var

- function/global scoped
- hoisting
- reinitialize
*/


var libraryName = "Hays Library"; // global scoped

function checkBookAvailability() {
    console.log("Welcome to the ", libraryName);

    if (true) {
        var bookTitle = "Harry Potter";
    }

    console.log("Checking availability of ", bookTitle);

    var libraryName = "Wichita Library";
    console.log(libraryName);
}

checkBookAvailability();

console.log(libraryName);