// const inputNum = parseInt(input);
// const inputArray = inputNum.split("");

function onesPlace(input) {
    const inputNum = parseInt(input);
    const inputArray = input.split("");
    const numArray = inputArray.map(function (num) {
        return parseInt(num);
    })
    console.log(numArray);

    if (numArray[numArray.length - 1] <= 3) {
        return "I".repeat(inputNum);
    } else if (numArray[numArray.length - 1] === 4) {
        return "IV";
    } else if (numArray[numArray.length - 1] === 5) {
        return "V";
    } else if (numArray[numArray.length - 1] > 5 && numArray[numArray.length - 1] < 9) {
        return "V" + "I".repeat(numArray[numArray.length - 1] - 5);
    } else {
        return "IX";
    }
}

function tensPlace(input) {
    if (inputNum)
}