// // Secret Number
// var secretNumber = 6;

// //user Input
// var userInput = prompt("Guess a Number");

// //compare the user Input and number

// if (Number(userInput) === secretNumber) {
//     alert("Yay! That is the right guess");
// } else {
//     alert("Better luck next time");
// }

function isEven(x) {
    if (x % 2 === 0) {
        return true;
    }
    return false;
}

function factorialvish(num) {

    var result = 1;

    for (var i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;



}