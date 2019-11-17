var colors = genearateRandomColors(6);

//rgb"(255, 0, 0)"

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
    //generate all new colors
    colors = genearateRandomColors(6);
    //pick new color from array
    pickedColor = pickColor();

    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click Listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        // compare color to picked Color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";

            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all squares and change color to given color

    for (var i = 0; i < squares.length; i++) {
        // change each color to match clicked color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function genearateRandomColors(num) {

    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    //"rgb(255, 0, 0)"

    return "rgb(" + r + ", " + g + ", " + b + ")";
}