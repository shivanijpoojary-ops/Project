class house {
  constructor(name) {
    this.name = name;
  }
  myhouse() {
    console.log(`my house name is ${this.name}`);
  }
}
class myhouse extends house {}
let value = new myhouse("david");
value.myhouse();
