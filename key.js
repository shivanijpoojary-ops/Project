let person = {
  name: "David",
  email: "gmail.com",
  address: {
    city: "bangalore",
  },
};
for (let key in person) {
  //console.log(key);
  console.log(`property ${key} value ${person[key]}`);
}
