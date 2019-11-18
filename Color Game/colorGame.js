var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[4];
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
    //add colors to square
    squares[i].style.backgroundColor = colors[i];
    //add eventlistener to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square and compare to picked Color
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert("Correct");
        } else {
            alert("incorrect");
        }

    });
}