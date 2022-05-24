var reverseArrayInPlace = function (array) {
    var arrLength = array.length;
    for (var i = 0; i < arrLength/2; i++) {
        var temp = array[i];
        array[i] = array[arrLength - 1 - i];
        array[arrLength - 1 - i] = temp;
    }
}

let numArr = [1,2,3,4,5,6,7,8,9,10];

reverseArrayInPlace(numArr);



