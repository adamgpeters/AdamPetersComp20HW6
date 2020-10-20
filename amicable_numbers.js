var div;

function nameLater() {
    numOne = document.getElementById("numOne").value;
    numTwo = document.getElementById("numTwo").value;
    div = document.createElement("div");
    var numOneP = document.createElement("p");
    var numTwoP = document.createElement("p");
    document.body.appendChild(div);                
    div.appendChild(numOneP);                      
    div.appendChild(numTwoP);                      
    numOneP.innerHTML = "NUMBER ONE: " + numOne;
    numTwoP.innerHTML = "NUMBER TWO: " + numTwo + "</bn>";

    testAmicable(numOne, numTwo);
    /* testShowArray(); */
}

function isFactor(num, factor) {
    if (factor == 0) 
        return false;
    return num % factor == 0;
}

function showArray(arr) {
    for (let i = 0; i < arr.length; i ++) {
        let p = document.createElement("p");
        div.appendChild(p);  
        p.innerHTML = arr[i];
    }
}

function testIsFactor() {
    console.log("Expecting true... recieved " + isFactor(100, 10));
    console.log("Expecting false... recieved " + isFactor(100, 90));
    console.log("Expecting true... recieved " + isFactor(-90, 9));
    console.log("Expecting true... recieved " + isFactor(2, -1));
}
/* testIsFactor(); */

function testShowArray() {
    console.log("Showing [1, 2, 3]...");
    showArray([1, 2, 3]);
    console.log("Showing [5, 1, 10]...");
    showArray([5, 1, 10]);
    console.log("Showing [-2, \"adam\", true]...");
    showArray([-2, "adam", true]);
}

function addArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i ++) 
        sum += arr[i];
    return sum;
}

function testAddArray() {
    console.log("Expecting 10... recieved " + addArray([2, 3, 5]));
    console.log("Expecting 0... recieved " + addArray([-10, 10]));
    console.log("Expecting 0... recieved " + addArray([]));
}
// testAddArray();

function getFactors(num) {
    let factors = [];
    for(let i = 1; i < Math.ceil(num / 2) + 1; i ++)
        if (isFactor(num, i)) factors.push(i);
    return factors;
}

function testGetFactors() {
    console.log("Expecting [1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110]... recieved " + getFactors(220));
    console.log("Expecting [1, 2, 4, 71, 142]... recieved " + getFactors(284));
    console.log("Expecting [1]... recieved " + getFactors(7));
}
/* testGetFactors(); */

function testAmicable(num1, num2) {
    let p = document.createElement("p");
    div.appendChild(p);  
    if (addArray(getFactors(num1)) == num2 && addArray(getFactors(num2)) == num1)
        p.innerHTML = num1 + " and " + num2 + " are amicable";
    else 
        p.innerHTML = num1 + " and " + num2 + " are not amicable";
}