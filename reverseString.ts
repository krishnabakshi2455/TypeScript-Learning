let string: string  = 'krishnabakshi'

function reverseString(str: string) {
    let reversedstring:string[] = []
    
    
    for (let i =  str.length - 1; i >=0; i--) {
        reversedstring.push(str[i])   
    }
    return reversedstring.join('')
}
console.log(reverseString(string));
