function MaximumProductOfAnyTwoDistinctElement(params: number[]) {
    let twolargestnumbers: number[] = []
    let result: number = 0
    let largestnumber: number = 0
    let secondlargestnumber: number = 0
    for (let i = 0; i < params.length; i++) {
        if (params[i] > largestnumber) {
            largestnumber = params[i]
        } else {
            if (params[i] > secondlargestnumber && params[i] != largestnumber) {
                secondlargestnumber = params[i]
            }
        }
    }
    twolargestnumbers.push(largestnumber, secondlargestnumber)
    result = largestnumber + secondlargestnumber

    return result

}
console.log(MaximumProductOfAnyTwoDistinctElement([12, 25, 365, 45, 5]));
