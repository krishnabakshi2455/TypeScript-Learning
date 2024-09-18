function capitalizesthefirstletter(params: string) {
    let stringarr: string[] = params.split(" ")
    let result: string[] = []
    stringarr.forEach((element) => {
       element.charAt(0).toUpperCase().concat().slice(1).toLowerCase()     

        result.push(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
    })

    return result
    // Follow - up: What edge cases might you need to consider
    // any other capital letter between the words

}

const sentence: string = "hello world from javascript";
console.log(capitalizesthefirstletter(sentence));
