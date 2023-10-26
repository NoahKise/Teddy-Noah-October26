function removingSpacesAndPunctuation(input) {
    const lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const editedArray = [];
    const inputArray = input.toLowerCase().split("")
    // const inputArray = input.split("")
    inputArray.forEach(function(element) {
        if (lettersArray.includes(element)) {
            editedArray.push(element);
            console.log(editedArray);
        }
    })

    

}