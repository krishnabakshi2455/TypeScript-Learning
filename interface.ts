interface student {
    name: string;
    age: number;
    id?:number |string
    readonly role:string
}
// reopening the interface

interface student{
    readonly job?:string;
}
// ? this means that value is optional

const abd:student={
    name: "krishna",
    age: 20,
    role:"developer"
}
console.log('krishna');
