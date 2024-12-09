const numbers = process.argv.slice(2);
const sum = numbers
  .map((str) => Number(str))
  .filter((num) => !isNaN(num))
  .reduce((acc, val) => acc + val, 0);

console.log(sum);
