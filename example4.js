function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log("i have conuter one");
    console.log("-------------------");
  }
  return inner;
}
let value = outer();
value();
