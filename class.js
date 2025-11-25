class house {
  constructor(name) {
    this.name = name;
  }
  myhouse() {
    console.log(`my house name is ${this.name}`);
  }
}
let value = new house("house"); // instance of class called object non perimitve data type that will store key value pair.
value.myhouse();
