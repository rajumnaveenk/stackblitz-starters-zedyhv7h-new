// map() — create a new array by transforming items

// document.addEventListener("DOMContentLoaded", ()=> {
//     let numbers = [1,2,3,4,5];

//     const newOne = numbers.map(numvalues => numvalues*2);

//     document.write(JSON.stringify(newOne));
// })

document.addEventListener("DOMContentLoaded", () => {
    let numbers = [1, 2, 3, 4, 5];

    const newOne = numbers.map(numvalues => numvalues * 2);

    document.write("Original array: " + JSON.stringify(numbers) + "<br>");
    document.write("New array: " + JSON.stringify(newOne));
});