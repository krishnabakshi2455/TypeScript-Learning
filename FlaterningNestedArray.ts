function FlaterningNestedArray(params: number[][]) {
    let flaterned = params.reduce((acc,curent)=>{
        return acc.concat(curent);
    })
    return flaterned
}
console.log(FlaterningNestedArray([[123],[35132]]));
