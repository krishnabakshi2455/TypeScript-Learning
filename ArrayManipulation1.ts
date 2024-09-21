// console.log('ArrayManipulation1');

function ArrayManipulation1(params: number[]) {

    let result = params.map((item)=>{
        return item*2
    })
    
    return result
}
console.log(ArrayManipulation1([5, 6, 4, 2]));
