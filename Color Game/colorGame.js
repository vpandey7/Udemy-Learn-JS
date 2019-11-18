var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
    // generate new colors
    colors = generateRandomColors(6);
    // pick new randomcolor
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    //change square colors
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "black";
});
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add colors to square
    squares[i].style.backgroundColor = colors[i];
    //add eventlistener to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square and compare to picked Color
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColor(pickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "Try Again";
        }

    });
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}