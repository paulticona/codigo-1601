const users = [
    {
      name: "Linder",
      lastName: "Hassinger",
      phoneNumber: "99999999",
      address: "Calle falsa 123",
      isDeveloper: true,
      age: 22,
    },
    {
      name: "Juan",
      lastName: "Zapata",
      phoneNumber: "99999999",
      address: "Calle falsa 1234",
      isDeveloper: false,
      age: 21,
    },
    {
      name: "pedro",
      lastName: "Zapata",
      phoneNumber: "99999999",
      address: "Calle falsa 1234",
      isDeveloper: false,
      age: 21,
    },
  ];
  
  for (let user in users) {
    console.log(users[user].name);
  }
  
  console.log("================");
  
  for (let user of users) {
    console.log(user.name);
  }
  