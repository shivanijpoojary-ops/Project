//let color = ["yellow", "red", "blue", "green"];
//console.log(color);
//color.push("black");
//console.log(color);
//color.pop("black"); // last element
//console.log(color);
//color.shift();   // remove first element
//console.log(color);
//color.unshift("orange"); // add first element
//console.log(color);
//console.log(color.indexOf("yellow")); // index position
//console.log(color);
//console.log(color.indexOf("gray"));
//console.log(color);
//console.log(color.sort()); // sort in acsending
//console.log(color.sort().reverse());  // reverse whole array
//let value = color.splice(1, 2); // remove array item and also add the array item
//console.log(value);
//let value = color.splice(1, 2);
//console.log(color);
//let value = color.splice(1, 2, "pink", "brown");
//console.log(color);
//let value = color.splice(1, 2, "pink", "brown");
//console.log(value);
//let color = ["yellow"];
//let key = ["Honda"];
//let value = color.concat(key); // adding to arrays
//console.log(value);
// to find largest word in the sentence or string

//let color = ["green", "red"];
//for (let i = 0; i < color.length; i++) {
//console.log(color[i]);
//}

let string = "i am attending the class in Besant ";
{
  let itr = string.split(" ");
  console.log(itr);
  let final = "";

  i = 1;
  for (let i = 0; i < string.length; i++) {
    if (itr[i].length > final.length) {
      final = itr[i];
    }
  }
  console.log(final); // sentence  final.length for largest word length
}
