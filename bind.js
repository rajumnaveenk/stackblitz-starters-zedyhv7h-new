// The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.


// const moduleone = {
//     name:"naveen",
//     greetings:function() {
//          return this.name;
//     },
// };

// const newOne = moduleone.greetings();
// console.log(newOne);


const newModule = {
    name:"kumar",
    greet(){
        return this.name;
    }
}

const newOne = newModule.greet();
console.log(newOne);