console.log('starting coding filterEvenNumbers');

function filterEvenNumbers(arr:number[]) {
    let evennumber: number[] = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2  === 0) {
            evennumber.push(arr[i])
        }else{
            console.log(arr[i] , ' is odd')
        }

    }
    return evennumber

}

console.log(filterEvenNumbers([1,25,36,54,66,88,89,57,56,22]));
