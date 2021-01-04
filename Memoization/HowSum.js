/*
  COMBINATORIC PROBLEM
    Write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
    The function should return an array containing any combination of elements that add up to exactly the targetSum. 
    If there is no combination that adds up to the targetSum, then return null.
    If there are multiple combinations possibles, you may return any single one.
*/

const withoutMemo = () => {
  const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (const num of numbers) {
      const remainder = targetSum - num;
      const remainderResult = howSum(remainder, numbers);
      if (remainderResult !== null) {
        return [...remainderResult, num];
      }
    }

    return null;
  };

  //Tests
  console.assert(howSum(0, [0]), ['TargetSum: 0; Numbers: [0]']);
  console.assert(howSum(7, [5, 3, 4, 7]), ['TargetSum: 1; Numbers: [1, 3]']);
  console.assert(!howSum(7, [2, 4]), ['TargetSum: 4; Numbers: [1, 2] ']);
  console.assert(howSum(14, [2, 8, 6]), ['TargetSum: 4; Numbers: [1, 2] ']);
  console.assert(!howSum(270, [7, 14]), ['TargetSum: 4; Numbers: [1, 2] ']);
};

const withMemo = () => {
  const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (const num of numbers) {
      const remainder = targetSum - num;
      const remainderResult = howSum(remainder, numbers, memo);

      if (remainderResult !== null) {
        memo[targetSum] = [...remainderResult, num];
        return memo[targetSum];
      }
    }

    memo[targetSum] = null;
    return null;
  };

  //Tests
  console.assert(howSum(0, [0]), ['TargetSum: 0; Numbers: [0]']);
  console.assert(howSum(7, [5, 3, 4, 7]), ['TargetSum: 1; Numbers: [1, 3]']);
  console.assert(!howSum(7, [2, 4]), ['TargetSum: 4; Numbers: [1, 2] ']);
  console.assert(howSum(14, [2, 8, 6]), ['TargetSum: 4; Numbers: [1, 2] ']);
  console.assert(!howSum(270, [7, 14]), ['TargetSum: 4; Numbers: [1, 2] ']);
};

const timerName = 'howSum';

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
