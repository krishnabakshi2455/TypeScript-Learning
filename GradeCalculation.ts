//Write a function that takes a numerical score (0-100) as an argument and returns a letter grade (A, B, C, D, or F) based on the standard grading scale.

function GradeCalculation(params: number) {
    if (params < 33) {
        console.log("F");
    } else {
        if (params > 33 && params < 45) {
            console.log("E");
        } else {
            if (params > 45 && params < 60) {
                console.log("D");
            } else {
                if (params > 60 && params < 70) {
                    console.log("C");

                } else {
                    if (params > 70 && params < 80) {
                        console.log("B");
                    } else {
                        if (params > 80 && params <= 100) {
                            console.log("A");
                        }
                    }
                }
            }
        }
    }

    return 'this is the grade'
}

console.log(GradeCalculation(88));
