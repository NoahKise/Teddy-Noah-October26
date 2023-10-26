function removingSpacesAndPunctuation(input) {
    const lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const editedArray = [];
    const inputArray = input.toLowerCase().split("")
    inputArray.forEach(function(element) {
        if (lettersArray.includes(element)) {
            editedArray.push(element);
            console.log(editedArray);
        }
    })
    const squareRoot = Math.sqrt(editedArray.length);
    const roundedRoot = Math.floor(squareRoot);
    console.log(roundedRoot);
}

// function splitArrayBySquareRoot(input) {
//     const squareRoot = Math.sqrt(removingSpacesAndPunctuation.length);
//     const roundedRoot = Math.floor(squareRoot);
//     console.log(roundedRoot);


// }