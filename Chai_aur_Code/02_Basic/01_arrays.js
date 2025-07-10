const fruits = ['apple', 'banana', 'orange', 'mango'];

console.log(fruits); // Output: [ 'apple', 'banana', 'orange', 'mango' ]
console.log(typeof fruits); // Output: object
console.log(Array.isArray(fruits)); // Output: true
console.log(typeof fruits[0]); // Output: string
// Example: Creating and using an array

// Let's say you want to store the names of your three best friends.
// Instead of creating three separate variables, you can use an array.

const friends = ['Alice', 'Bob', 'Charlie'];

// You can access each friend's name using their index (position in the array).
console.log(friends[0]); // Output: Alice
console.log(friends[1]); // Output: Bob
console.log(friends[2]); // Output: Charlie

// You can also add a new friend to the array.
friends.push('David');
console.log(friends); // Output: [ 'Alice', 'Bob', 'Charlie', 'David' ]

// Arrays are useful because you can easily loop through all the items.
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
// Output:
// Alice
// Bob
// Charlie
// David

// In simple words: An array is like a list where you can store multiple values together and access them by their position.

// what is an array?
// An array is a data structure that can hold multiple values in a single variable.
// It is a collection of items, which can be of the same or different types, and
// is used to store lists of data. Arrays are commonly used in programming to manage and manipulate collections of data efficiently.
// An array is a special type of object in JavaScript that allows you to store multiple values in a single variable.