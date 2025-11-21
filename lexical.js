//let name = "amar";    // golbal
//function outer() {
//console.log(name);

//}
//console.log(name);
//outer();

//let name1 = "akbar";   // local
//function outer(){
//console.log(name1);
//}
//console.log(name1);
//outer();

//let name2 = "anthnoy";
//function inner() {
//console.log(name2);   // nested
//}
//console.log(name2);
//inner();

let name = "amar";
function outer() {
  let name1 = "ab";
  function inner() {
    let name2 = "an";
    console.log(name);
    console.log(name1);
    console.log(name2);
  }
  inner();
}
outer();
