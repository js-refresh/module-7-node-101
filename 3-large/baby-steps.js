const numbers = process.argv.slice(2);

let total = 0;
numbers.forEach(num => {
  total = parseInt(num, 10) + total
});

console.log(total)