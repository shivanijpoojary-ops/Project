let array = [1, 2, 3, 4, 5];
let final = 5;
let value = [];
for (i = 0; i < array.length; i++) {
  for (j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] == final) {
      value.push([i, j]);
    }
  }
}
console.log(value);
