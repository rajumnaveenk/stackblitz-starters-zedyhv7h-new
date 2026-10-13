// The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.


// const moduleone = {
//     name:"naveen",
//     greetings:function() {
//          return this.name;
//     },
// };

// const newOne = moduleone.greetings();
// console.log(newOne);

document.addEventListener("DOMContentLoaded" , ()=> {
const newModule = {
    name: "kumar",
    greet(a, b) {
        var c = a + b;
        return {
            name: this.name,
            sum: c
        };
    }
};
const newBtn = document.querySelector(".newClass");
newBtn.addEventListener("click", ()=> {
      alert(newOne.sum);
})

const newOne = newModule.greet(10, 20);
console.log(newOne.name);
console.log(newOne.sum);
});