function speedingsystem() {
  let speed = 0;
  return function accelerate() {
    speed = speed + 10;
    console.log("my vechile is at speedd", speed);
  };
}
let car = speedingsystem();
car();
car();
