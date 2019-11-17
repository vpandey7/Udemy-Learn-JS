//print values of array in reverse

function printReverse(item) {

    for (var i = item.length - 1; i >= 0; i--) {
        console.log(item[i]);
    }
}
// check if each item is Uniform in the Array
function isUniform(item) {

    var firstItem = item[0];
    for (var i = 1; i < item.length; i++) {
        if (item[i] !== firstItem) {
            return false;
        }
    }
    return true;
}
// function to add values of items in Array

function sumArray(item) {
    var sum = 0;
    // for (var i = 0; i < item.length; i++) {
    //     sum += item[i];
    // }

    item.forEach(function (element) {
        sum += element;

    });
    return sum;
}

function maxArray(item) {
    var MaxNumber = item[0];
    for (var i = 1; i < item.length; i++) {
        if (item[i] > MaxNumber) {
            MaxNumber = item[i];
        }
    }
    return MaxNumber;


}