let string1:string|null = prompt("enter the first string")

function PalindromeChecker(str:string):void {
    let reversestr:string = str.split('').reverse().join('')
    let normalstr:string= str
    if (reversestr === normalstr) {
        console.log(str ," is a palindrome")
    }else{
        console.log(str ," is not a palindrome")
    }
}
if (string1 !== null) {
    PalindromeChecker(string1)
}else{
    console.log('first string is null');
    
}
