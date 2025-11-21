//let array = [1, 0, 0, 0, 1];
let array = [1, 0, 0, 0, 0, 0, 1];
let tree = 1;
let count = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] == 0) {
    let prevousvalue = array[i - 1];
    let nextvalue = array[i + 1];
    if (prevousvalue == 0 && nextvalue == 0) {
      count++;
    }
  }
}
console.log(tree == count);
