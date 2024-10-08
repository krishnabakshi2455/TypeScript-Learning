// Ob0jects: How do you add a new property to an existing object? Provide an example object and show how to add a property called age.
interface person {
    name: string;
}
let object1:person={
    name:"krishna"
};
(object1 as any).age = 20

console.log( object1 );

