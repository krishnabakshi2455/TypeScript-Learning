
function LargestNumberinanArray(params: number[]) {

    let result: number = 0
    let elsevalue:number = 0

    for (let i = 0; i < params.length; i++) {
        if (params[i] > result) {
            result = params[i]
            console.log('this is if block', result);
        } else {
            elsevalue = params[i]
            console.log('this is else block', elsevalue);

        }
    }

    return result

}

console.log(LargestNumberinanArray([1, 5, 3, 6, 9, 8, 7, 0,21]));
