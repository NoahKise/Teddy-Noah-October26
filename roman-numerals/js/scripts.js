// const inputNum = parseInt(input);
// const inputArray = inputNum.split("");

function onesPlace(input) {
    const inputArray = input.split("");
    const numArray = inputArray.map(function (num) {
        return parseInt(num);
    })
    if (numArray[numArray.length - 1] <= 3) {
        return "I".repeat(numArray[numArray.length - 1]);
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
    const inputArray = input.split("");
    const numArray = inputArray.map(function (num) {
        return parseInt(num);
    })
    if (numArray[numArray.length - 2] <= 3) {
        return "X".repeat(numArray[numArray.length - 2]);
    } else if (numArray[numArray.length - 2] === 4) {
        return "XL";
    } else if (numArray[numArray.length - 2] === 5) {
        return "L";
    } else if (numArray[numArray.length - 2] > 5 && numArray[numArray.length - 2] < 9) {
        return "L" + "X".repeat(numArray[numArray.length - 2] - 5);
    } else if (numArray[numArray.length -2] === 9) {
        return "XC";
    } else {
        return ""
    }
}

function hundredsPlace(input) {
    const inputArray = input.split("");
    const numArray = inputArray.map(function (num) {
        return parseInt(num);
    })
    if (numArray[numArray.length - 3] <= 3) {
        return "C".repeat(numArray[numArray.length - 3]);
    } else if (numArray[numArray.length - 3] === 4) {
        return "DC";
    } else if (numArray[numArray.length - 3] === 5) {
        return "D";
    } else if (numArray[numArray.length - 3] > 5 && numArray[numArray.length - 3] < 9) {
        return "D" + "C".repeat(numArray[numArray.length - 3] - 5);
    } else if (numArray[numArray.length - 3] === 9) {
        return "CM";
    } else {
        return "";
    }
}

function thousandsPlace(input) {
    const inputArray = input.split("");
    const numArray = inputArray.map(function (num) {
        return parseInt(num);
    })
    if (numArray[numArray.length - 4] <= 3) {
        return "M".repeat(numArray[numArray.length - 4]);
    } else {
        return ""
    }
}

function roman(input) {
    const thousand = thousandsPlace(input);
    const hundred = hundredsPlace(input);
    const ten = tensPlace(input);
    const one = onesPlace(input);
    return thousand + hundred + ten + one;
}