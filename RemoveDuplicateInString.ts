
function RemoveDuplicateInString(params:string) {
    let result:string[]= []
    let strarr = params.split('')
    // console.log(strarr);
    for (let i = 0; i < strarr.length; i++) {
        if (strarr.indexOf(strarr[i]) === i) {
            result.push(strarr[i])
        }else{
            console.log('duplicate =', strarr[i],'index is',i);
        }

    }
    return result
}
console.log(RemoveDuplicateInString('krishnkakri'));
