//many forms of behaviour
class mobile {
  buyproduct() {
    console.log("i am buying a product");
  }
}
class apple extends mobile {
  buyproduct() {
    console.log("i am going to buy apple mobile");
  }
}
class samsung extends mobile {
  buyproduct() {
    console.log("buying samung");
  }
}
let value = new mobile();
value.buyproduct();
