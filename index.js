import _ from 'lodash';

function genSquares(n) {
  return _.range(1, n + 1).map(value => value ** 2);
}

console.log(genSquares(1));
console.log(genSquares(5));
