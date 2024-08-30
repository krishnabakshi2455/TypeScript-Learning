let string1 = prompt("enter the first string");
function PalindromeChecker(str) {
    let reversestr = str.split('').reverse().join('');
    let normalstr = str;
    if (reversestr === normalstr) {
        console.log(str, " is a palindrome");
    }
    else {
        console.log(str, " is not a palindrome");
    }
}
if (string1 !== null) {
    PalindromeChecker(string1);
}
else {
    console.log('first string is null');
}
