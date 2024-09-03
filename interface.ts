interface student {
    name: string;
    age: number;
    id?: number | string
    readonly role: string
}
// reopening the interface

interface student {
    readonly job?: string;
}
// ? this means that value is optional

const abd: student = {
    name: "krishna",
    age: 20,
    role: "developer"
}
// console.log('krishna');

class Car {
    fname: string = ''
    lname: string = ''
    role: string = ''
    id: number = 0
    constructor(fname: string, lname: string, role: string, id: number) {
        this.fname = fname
        this.lname = lname
        this.role = role
        this.id = id
    }
}

// const car1 = new Car('abc', 'cde', 'efg', 50)

class Car2 extends Car {

    constructor(fname: string, lname: string, role: string, id: number) {
        super(fname,lname,role,id)

    }
}

const car3 = new Car2('abc','def','ghi',52)
console.log(car3.id);

// console.log(car1);
