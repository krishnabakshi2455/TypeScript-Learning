

function greaterthantheaverageofallnumbersinthearray(arr:number[]) {
    const result:number[] = []

    const sum:number=arr.reduce((acumulator,currentvalue)=> acumulator + currentvalue)
    
    const average = sum / arr.length
    result.push(average)

    
    return result
}

console.log(greaterthantheaverageofallnumbersinthearray([1,2,3,4,5,6]));
