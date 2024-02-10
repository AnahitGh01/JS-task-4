function mostCommonPrefix(str) {
    if (str.length === 0) return ''; //Check if the array is empty; if so, return an empty string.

    for (let i = 0; i < str[0].length; i++) { //Loop through each character of the first string.
        const char = str[0][i]; 
        for (let j = 1; j < str.length; j++) {  
            if (i === str[j].length || str[j][i] !== char) { 
                return str[0].substring(0, i); // Compare the current character with the corresponding character of all other strings. If a mismatch is found or the end of a string is reached, return the common prefix up to the previous character.
            }
        }
    }
    return str[0]; //If the loop completes without a mismatch, the entire first string is the longest common prefix.
}
console.log(mostCommonPrefix(["alive", "along", "almost"])); // "al"
console.log(mostCommonPrefix(["free", "freedom", "freeze"])); // "free"
console.log(mostCommonPrefix(["too", "get", "more"])); // ""