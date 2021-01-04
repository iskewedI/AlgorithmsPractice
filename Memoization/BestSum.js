/*
  OPTIMIZATION PROBLEM
    Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
    The function should return an array containing the shortest combination of elements add up to exactly the targetSum. 
    If there is tie for the shortest combination, you may return any of the shortest.
*/

const withoutMemo = () => {
  const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (const num of numbers) {
      const remainder = targetSum - num;
      const remainderCombination = bestSum(remainder, numbers);

      if (remainderCombination !== null) {
        const combination = [...remainderCombination, num];

        if (!shortestCombination || combination.length < shortestCombination.length) {
          shortestCombination = combination;
        }
      }
    }

    return shortestCombination;
  };

  //Tests
  console.log('TargetSum: 0; Numbers: [0]', bestSum(0, [0])); // []
  console.log('TargetSum: 7; Numbers: [5, 3, 4, 7]', bestSum(7, [5, 3, 4, 7])); // [3,2]
  console.log('TargetSum: 5; Numbers: [2, 3, 8, 10]', bestSum(5, [2, 3, 8, 10])); // 7
  console.log('TargetSum: 7; Numbers: [2, 4]', bestSum(7, [2, 4])); // null
  console.log('TargetSum: 270; Numbers: [7, 14]', bestSum(270, [7, 14])); //null
};

const withMemo = () => {
  const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (const num of numbers) {
      const remainder = targetSum - num;
      const remainderCombination = bestSum(remainder, numbers, memo);

      if (remainderCombination !== null) {
        const combination = [...remainderCombination, num];

        if (!shortestCombination || combination.length < shortestCombination.length) {
          shortestCombination = combination;
        }
      }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
  };

  //Tests
  console.log('TargetSum: 0; Numbers: [0]', bestSum(0, [0])); // []
  console.log('TargetSum: 7; Numbers: [5, 3, 4, 7]', bestSum(7, [5, 3, 4, 7])); // [3,2]
  console.log('TargetSum: 5; Numbers: [2, 3, 8, 10]', bestSum(5, [2, 3, 8, 10])); // 7
  console.log('TargetSum: 7; Numbers: [2, 4]', bestSum(7, [2, 4])); // null
  console.log('TargetSum: 270; Numbers: [7, 14]', bestSum(270, [7, 14])); //null
};

const timerName = 'bestSum';

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
