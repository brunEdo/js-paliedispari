// PALINDROME

// 1. ask a word to the user
const userWord = () => {
    return document.getElementById("word").value.replace(/ /g, '');
}

// 2. reverse the word
const reverseThisString = (string) => {
    let reversedString = "";
    // return word.split("").reverse().join("");
    for (let i = string.length - 1; i >= 0; i-- ) {
        reversedString += string[i];
    }
    console.log(reversedString)
    return reversedString;
}

// 3. check if the word is palindrome
const isPalindrome = (string) => {
    if (string === reverseThisString(string)) {
        return true;
    }
    return false;
}

document.getElementById("ask").addEventListener("click", () => {
    // 4. run the script and tell the user the result
    if (userWord().length <= 1) {
        document.getElementById("answer").innerHTML = "The word is not long enough!";
    } else if (isPalindrome(userWord())) {
        document.getElementById("answer").innerHTML = "The word is palindrome";
    } else {
        document.getElementById("answer").innerHTML = "The word is not palindrome";
    }
})
