function outer() {
  let amount = 1000;
  function addmoney(value) {
    amount = amount + value;
    console.log("i have counter", amount);
    console.log("------------------------");
  }
  return addmoney;
}
let value = outer();
value(1000);
value(1000);
