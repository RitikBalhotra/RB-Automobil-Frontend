const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
  };
  
//   console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
   console.log(greeting(null)); // "Howdy, stranger"