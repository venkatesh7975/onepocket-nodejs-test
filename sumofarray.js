const readline = require('readline');

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a array of integers separated by spaces: ', (input) => {
  const inputArray = input.split(' ').map(Number);

  if (inputArray.some(isNaN)) {
    console.error('Invalid input. Enter list of integers separated by spaces only.');
  } else {
    const result = sumArray(inputArray);
    console.log('Sum:', result);
  }

  rl.close();
});
