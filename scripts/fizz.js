
var num = 11;

fizz = function(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  if (num % 5 === 0) {
    return "Fizz";
  }
  if (num % 3 === 0) {
    return "Buzz";
  }
//   console.log("blah");
  return num;
};
