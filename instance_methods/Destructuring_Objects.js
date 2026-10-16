const persons = [
    {
        name:"Naveen",
        id:1234,
        address:"hyderabad"
    },
    {
        name:"Naveen kumar",
        id:34567,
        address:"Mumbai"
    },
    {
        name:"kumar",
        id:546734,
        address:"Pune"
    }
]

const [name_one ,...other] = persons;

// document.write(name_one.name , "<br>");
// document.write(other[1].name);

persons.forEach(p=> {
    document.write(p.name + " " + p.id + " " + p.address + " ")
})