function outer() {
  let name = "ram";
  console.log(name);
  function inner() {
    let name2 = "suma";
    console.log(name2);
    console.log("---------------");
  }
  inner();
}
outer();
outer();
