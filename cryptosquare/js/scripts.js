function crypto(input) {
    const lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const editedArray = [];
    const inputArray = input.toLowerCase().split("")
    inputArray.forEach(function (element) {
        if (lettersArray.includes(element)) {
            editedArray.push(element);
        }
    })
    const squareRoot = Math.sqrt(editedArray.length);
    const roundedRoot = Math.floor(squareRoot);
    let joinedString = editedArray.join("")
    let splitArray = [];
    let lastArray = [];
    let splitString = []
    for (let i = 0; i < joinedString.length; i += roundedRoot) {
        splitString.push((joinedString.slice(i, i + roundedRoot)));
        // splitArray.push(splitString);
    }
    firstGroup = []
    for (let i = 0; i < roundedRoot + 1; i += 1) {
        lastArray.push(splitString[i]);
        for (let i = 0; i < roundedRoot; i += 1) {
            firstGroup.push(splitString[i][5])
        }
        // console.log(firstGroup)
    }
    // for (let i = 0; i < roundedRoot; i += 1) {
    //     firstGroup.push(splitString[i][i - i])
    // }
    // console.log(firstGroup)
}

// function splitArrayBySquareRoot(input) {
//     const squareRoot = Math.sqrt(removingSpacesAndPunctuation.length);
//     const roundedRoot = Math.floor(squareRoot);
//     console.log(roundedRoot);


// }