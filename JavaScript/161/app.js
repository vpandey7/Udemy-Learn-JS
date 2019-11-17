var userInput = prompt("What would you like to do ?");
var toDo = [];

while (userInput !== "quit") {
    if (userInput === "new") {
        addItem();
    } else if (userInput === "list") {
        printList();
    } else if (userInput === "delete") {
        removeItem();
    }
    userInput = prompt("What would you like to do ?");
}
console.log("Ok, you Quit the app");





function addItem() {
    var newItem = prompt("Enter a new Todo");
    toDo.push(newItem);
    console.log("Added new ToDo");
}

function printList() {
    console.log("*********");
    toDo.forEach(function (todo, i) {
        console.log(i + "." + todo);

    });
    console.log("*********");
}

function removeItem() {
    var index = prompt("Enter index to remove");
    toDo.splice(index, 1);
    console.log("Delted To Do");
}