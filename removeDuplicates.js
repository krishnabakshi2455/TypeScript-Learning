function removeDuplicates(arr) {
    let uniquevalue = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniquevalue[arr[i]]) {
            uniquevalue[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return ['this is the result ==', result, 'this is the duplicate item', uniquevalue];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 6, 6, 7]));
