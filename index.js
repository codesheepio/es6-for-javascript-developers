const numbers = [1, 2, 3, 4, 5];
const sum = numbers.map(
  function(number) {
    return number ** 2;
  }
).reduce(
  function(accumulate, number) {
    return accumulate + number;
  },
  0,
);

console.log(sum);
