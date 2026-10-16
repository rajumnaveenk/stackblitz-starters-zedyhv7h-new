// Key difference:



// - map() → returns a new array

// - filter() → returns a new array with matching items

// - find() → returns the first matching item only, or undefined if none match


const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true }
  ];

  const names = users.map(user => user.name);
  document.write(names);

const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

const firstActive = users.find(newUser=>newUser.active);
console.log(firstActive);