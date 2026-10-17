let newData="https://jsonplaceholder.typicode.com/posts/1";

fetch(newData).then(res=>res.json()).then(data=>{
    console.log(data.title);
});
