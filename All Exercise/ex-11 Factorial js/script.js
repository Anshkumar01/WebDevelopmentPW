let n = 5;
function fact(num) {
  let arr = Array.from(Array(num + 1).keys());
  let c = arr.slice(1).reduce((a, b) => a * b);
  return c;
}

function fact2(num) {
  let fact = 1;
  for (let index = 1; index <= num; index++) {
    fact = fact * index;
  }
  return fact;
}

console.log(fact(n));
console.log(fact2(n));
