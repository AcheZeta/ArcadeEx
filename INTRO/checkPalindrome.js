//Given the string, check if it is a palindrome.
//A palindrome is a string that reads the same left-to-right and right-to-left.

checkPalindrome = (inputString) => {
    let reverseString = inputString.split('').reverse().join('')
    if (reverseString === inputString) {
        return true
    } else {
        false
    }
}