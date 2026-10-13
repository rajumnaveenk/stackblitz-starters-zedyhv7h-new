// The apply() method calls a function and passes its arguments as an array.

const numbers= [1,2,3,4,5,6,7];

// const newOne = Math.max.apply(null,numbers);
const newOne = Math.min.apply(null,numbers);


console.log(newOne);