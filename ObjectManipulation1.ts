interface StringNumber {
    [key: string]: number | string
}
function ObjectManipulation1(params: StringNumber, params2: StringNumber) {
    interface ArrayinObj {
        [key: string]: string[] | number[]
    }
    let resultobj: ArrayinObj = {}

    // If both objects have the same key(e.g., age), the value from the second object(obj2) will overwrite the value from the first object(obj1).

    for (const key in params) {
        // console.log(`${key}: ${params[key]}`);

        Object.assign(resultobj, { "name": [params.name, params2.name], "age": [params.age, params2.age], "value": [params.value, params2.value] })


    }



    return resultobj
}
console.log(ObjectManipulation1({
    "name": "John",
    "age": 30,
    "value": 5
}, {
    "name": "Jane",
    "age": 25,
    "value": 15
}));
