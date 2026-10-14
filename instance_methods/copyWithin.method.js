/*In JavaScript, the copyWithin() method copies part of an array to another position within the same array. It changes the original array 
and does not increase its length. */

const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.copyWithin(1, 2);

console.log(fruits);