function onesPlace(input) {
    const inputNum = parseInt(input);
    if (inputNum <= 3) {
        return "I".repeat(inputNum);
    } else if (inputNum === 4) {
        return "IV";
    } else if (inputNum === 5) {
        return "V";
    } else if (inputNum > 5 && inputNum < 9) {
        return "V" + "I".repeat(inputNum - 5);
    } else {
        return "IX";
    }
}