function difference() {
    var var1:string = 'krishna'
    let let1:string = 'krishna2'
    const const1:string='krishna3'
    const const2:number[] = []

    var var1:string = 'bakshi' // var can be redclared in the same scope but the value of this redclared var will replace the previous one
    // let let1:string = '' // let can not redeclared in the same scope
    // const const1:string = '' // const can not redeclared in the same scope
    const2.push(4965132) // but array or objects created using const can be modified

    return [var1,let1,const1,const2]
}
console.log(difference());
