let obj = {
  // this keyword used to refer the object contest value
  name: "david",
  sayhello: function () {
    console.log(`my name is $ {this.name}`);
  },
};
obj.sayhello();
