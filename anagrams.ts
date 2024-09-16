
function Angram(params1:string,params2:string) {
    if (params1.length  != params2.length) {
        return 'Not An Angram because of length'
    }
    
    for (let i = 0; i < params1.length; i++) {
         if (params2.includes(params1[i])) {
            return 'this is an angram'
         }else{
            return `this is not an angram`
         }
    }

}
console.log(Angram('krishna','karishn'));
