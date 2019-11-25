function getModulus(number, divisor) {
  while (number >= divisor) {
    number = number - divisor; 
  };
  return number;
};
const limit = 15;
let counter = 0;
const fizz = 3;
const buzz = 5;
while (!(counter === limit)) {
  counter++;
  if (getModulus(counter, fizz) === 0 && getModulus(counter, buzz) === 0) {
    console.log(`Fizz!Buzz!`);
    continue;
  }
  if (getModulus(counter, fizz) === 0) {
    console.log(`Fizz!`);
    continue;
  }
  if (getModulus(counter, buzz) === 0) {
    console.log(`Buzz!`)
    continue;
  }
  console.log(counter);
};