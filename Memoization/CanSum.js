/*
  DECISION PROBLEM
    Write a function canSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
    The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers
    from the array.
    You may use an element of the array as many times as needed.
    You may assume that all input numbers are non-negative.
*/

const withoutMemo = () => {
  const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    si;

    for (const num of numbers) {
      const remainder = targetSum - num;
      if (canSum(remainder, numbers)) {
        return true;
      }
    }

    return false;
  };

  //Tests
  console.assert(canSum(0, [0]), ['TargetSum: 0; Numbers: [0]']); //Should return true
  console.assert(canSum(7, [5, 3, 4, 7]), ['TargetSum: 1; Numbers: [1, 3]']); //Should return true
  console.assert(!canSum(7, [2, 4]), ['TargetSum: 4; Numbers: [1, 2] ']); //Should return false
  console.assert(canSum(14, [2, 8, 6]), ['TargetSum: 4; Numbers: [1, 2] ']); //Should return true
  console.assert(canSum(270, [7, 14]), ['TargetSum: 4; Numbers: [1, 2] ']); //Should return false
};

const withMemo = () => {
  const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (const num of numbers) {
      const remainder = targetSum - num;

      if (canSum(remainder, numbers, memo) === true) {
        memo[targetSum] = true;
        return true;
      }
    }

    memo[targetSum] = false;
    return false;
  };

  //Tests
  console.assert(canSum(0, [0]), ['TargetSum: 0; Numbers: [0]']); //Should return true
  console.assert(canSum(7, [5, 3, 4, 7]), ['TargetSum: 1; Numbers: [1, 3]']); //Should return true
  console.assert(!canSum(7, [2, 4]), ['TargetSum: 4; Numbers: [1, 2] ']); //Should return false
  console.assert(canSum(14, [2, 8, 6]), ['TargetSum: 4; Numbers: [1, 2] ']); //Should return true
  console.assert(canSum(270, [7, 14]), ['TargetSum: 4; Numbers: [1, 2] ']); //Should return false
};

const timerName = 'canSum';

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
