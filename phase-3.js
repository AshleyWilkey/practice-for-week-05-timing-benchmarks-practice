const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Fill this in
  const sums = [];
  console.time("Nums10Timing");
  for (let i = 1; i <= 10; i++) {
    sums.push(addNums(i * increment));
    console.timeLog("Nums10Timing");
  }
  console.timeEnd("Nums10Timing");
  return sums;
}
// Then, add timing code
// Your code here

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  let totalSum = [];
  console.time("ManyNums10Timing");
  for (let i = 1; i <= 10; i++) {
    totalSum.push(addManyNums(i * increment));
    console.timeLog("ManyNums10Timing");
  }
  console.timeEnd("ManyNums10Timing");
  return totalSum;
  // Then, add timing code
  // Your code here
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
