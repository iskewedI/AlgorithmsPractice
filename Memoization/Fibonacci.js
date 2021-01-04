/*
    Write a function that takes in a number as an argument. 
    The function should return the n-th number of the Fibonacci sequence.
*/

const withoutMemo = () => {
  // O(n^2) time
  const fib = n => {
    if (n <= 2) return 1; // First two numbers are exactly 1.

    return fib(n - 1) + fib(n - 2);
  };

  console.assert(fib(1) === 1, ['Fib(1)']); //Should return 1.
  console.assert(fib(2) === 1, ['Fib(2)']); //Should return 1.
  console.assert(fib(3) === 2, ['Fib(3)']); //Should return 2.
  console.assert(fib(4) === 3, ['Fib(4)']); //Should return 3.
  console.assert(fib(9) === 34, ['Fib(9)']); //Should return 34.
  console.assert(fib(25) === 75025, ['Fib(25)']); //Should return 75025.
  console.assert(fib(35) === 9227465, ['Fib(35)']); //Should return 9227465.
  console.assert(fib(40) === 102334155, ['Fib(40)']); //Should return 102334155.
};

const withMemo = () => {
  // O(n) time
  // O(n) space
  const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];

    if (n <= 2) return 1; //First two numbers are exactly 1.

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
  };

  console.assert(fib(1) === 1, ['Fib(1)']); //Should return 1.
  console.assert(fib(2) === 1, ['Fib(2)']); //Should return 1.
  console.assert(fib(3) === 2, ['Fib(3)']); //Should return 2.
  console.assert(fib(4) === 3, ['Fib(4)']); //Should return 3.
  console.assert(fib(9) === 34, ['Fib(9)']); //Should return 34.
  console.assert(fib(25) === 75025, ['Fib(25)']); //Should return 75025.
  console.assert(fib(35) === 9227465, ['Fib(35)']); //Should return 9227465.
  console.assert(fib(40) === 102334155, ['Fib(40)']); //Should return 102334155.
};

const timerName = 'Fibonacci';

console.time(timerName);
console.log('Starting without memoizing...');

withoutMemo();

console.info('Without memoizing time: ');
console.timeEnd(timerName);

console.time(timerName);
console.log('Starting with memoizing...');

withMemo();

console.info('With memoizing time: ');
console.timeEnd(timerName);
