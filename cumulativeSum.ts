

function cumulativeSum(arr: number[]) {
    let result: number[] = []
    let sum = 0

    arr.forEach(element => {
        if (element) {
            sum += element
            result.push(sum)
        }
    });

    return result

}
console.log(cumulativeSum([3, 5, 10, 88, 2, 6, 7]));
