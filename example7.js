function possibility(step) {
  if (step <= 2) {
    return step;
  }
  let array = [];
  let array1 = [2, 3, 1, 1, 4];
  let array2 = [2, 3, 2, 5, 1, 1, 3, 1, 1, 4];
  for (i = 0; i <= step; i++) {
    array[i] = array1[i + 1] + array2[i - 1];
  }
  return array[step];
}
let value = possibility(2);
console.log(value);
