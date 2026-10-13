// A closure happens when a function remembers and can access variables from the scope where it was created, even after that outer function has finished executing.

// function outer(){
//     let msg ="naveen";

//     function inner(){
//         console.log(msg);
//     }

//     inner();
// }
// outer();


function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count)
    }

    return inner;

}

const newFun = outer();
newFun();
newFun();
