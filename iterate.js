//let array=[1,2,3,4];
//array=[{},{},{}] // array of object
let response = [
  {
    name: "iphone 11",
    company: "Apple",
  },
  {
    name: "iphone 14",
    company: "Apple",
  },
  {
    name: "galaxy",
    company: "samsung",
  },
  {
    name: "oppo",
    company: "oppo",
  },
];
console.log(response);
finalarray = [];
for (let i = 0; i < response.length; i++) {
  if (response[i].company == "apple") {
    finalarray.push(response[i]);
  }
}
console.log(finalarray);
