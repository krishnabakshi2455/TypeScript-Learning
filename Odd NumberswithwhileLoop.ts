//Odd Numbers with while Loop: Use a while loop to print all odd numbers from 1 to 50.

function OddNumberswithwhileLoop(params: number) {

    let i = 0
    while (i <= params) {
        if (i % 2 !== 0) {
            console.log(`This Is Odd ${i}`);
            // break
        }
        // else{
        //     console.log(`This Is Even ${i}`)
        // }
        i++;
    }


}
console.log(OddNumberswithwhileLoop(50));
