/////////////////TUPLES///////////////////.

/*  Tuples are a collection of values of different data types stored in a single entity, allowing for the storage 
and  manipulation of multiple values as a single unit. tuples are similar to arrays , but with a fixed size and
immutable elements. */

// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// Typescript introduced a new data type called a tuple.
// Tuples allow you to define an array with a fixed number of elements, where each element has a known type.
// Using tuples can help catch bugs early on in development.
// Tuples are a way to enforce a fixed length and type structure on arrays.

// Here's i'm gonna to Create a tuple.
let person: [string, number, boolean] = ['Asif khan', 22, true];

// Now Accessing elements.
console.log(person[0]); // Output: Asif khan.
console.log(person[1]); // Output: 22.
console.log(person[2]); // Output: true.

// Now Modifying elements.
person[0] = 'Adnan khan';
person[1] = 24;
person[2] = true;

console.log(person[0]); // Output: Adnan khan.
console.log(person[1]); // Output: 24.
console.log(person[2]); // Output: true.

// Now Adding new elements.
person.push('Danish khan');

console.log(person); // Output: Danish khan.

// Now Removing elements.
person.pop();

console.log(person); // Output: Adnan khan.

// Now seeing the usage of Tuple with different data types.
let person1: [string, number, boolean, string, number] = ['Asif khan', 22, true, 'Danish khan', 24];
console.log(person1); // Output: Asif khan, 22, true, Danish khan, 24.

// Example no 02.
let colors : [number, string, boolean] = [1, 'red', true];
console.log(colors); // Output: [1, 'red', true].

// Example no 03.
let fruits : [string,boolean] = ['pineapple', true];
console.log(fruits); // Output: ['pineapple', true].

// Example no 04.

// Now exploring the use of tuples in the function.

function printInfo(person: [string, number, boolean]){
    console.log(`Name: ${person[0]}`);
    console.log(`Age: ${person[1]}`);
    console.log(`Is Active: ${person[2]}`);
    
}

printInfo(['Asif khan', 22, true]);

// Example no 05.
// Now exploring the use of tuples in objects.

let person0 : {name: string, age: number, isActive: boolean} = {
   name: 'Ahmed khan',
   age: 25,
   isActive: false
}

console.log(person0); // Output: {name: 'Ahmed khan', age: 25, isActive: false}.

















