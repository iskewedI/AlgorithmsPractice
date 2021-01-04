/* 
A traveler in a 2D grid. He begins in the top-left corner and his goal is to travel to the bottom-right corner.
He may only move down or right. Write a function that calculates how many ways can he travel to the goal on a grid
with dimensions cols * row
*/

const withoutMemo = () => {
  const gridTraveler = (columns, rows) => {
    if (columns === 0 || rows === 0) return 0;
    if (columns === 1 && rows === 1) return 1;

    return gridTraveler(columns - 1, rows) + gridTraveler(columns, rows - 1);
  };

  //Tests
  console.assert(gridTraveler(0, 1) === 0, ['Grid: 0*1']); //Should return 0.
  console.assert(gridTraveler(1, 1) === 1, ['Grid: 1*1']); //Should return 1.
  console.assert(gridTraveler(1, 2) === 1, ['Grid: 1*2']); //Should return 2.
  console.assert(gridTraveler(2, 3) === 3, ['Grid: 4*4']); //Should return 3.
  console.assert(gridTraveler(8, 8) === 3432, ['Grid: 8*8']); //Should return 3432.
  console.assert(gridTraveler(18, 18) === 2333606220, ['Grid: 18*18']); //Should return 155117520
};

const withMemo = () => {
  const gridTraveler = (columns, rows, memo = {}) => {
    const key = `${columns},${rows}`;

    if (key in memo) return memo[key];

    if (columns === 0 || rows === 0) return 0;
    if (columns === 1 && rows === 1) return 1;

    memo[key] =
      gridTraveler(columns - 1, rows, memo) + gridTraveler(columns, rows - 1, memo);

    return memo[key];
  };

  //Tests
  console.assert(gridTraveler(0, 1) === 0, ['Grid: 0*1']); //Should return 0.
  console.assert(gridTraveler(1, 1) === 1, ['Grid: 1*1']); //Should return 1.
  console.assert(gridTraveler(1, 2) === 1, ['Grid: 1*2']); //Should return 2.
  console.assert(gridTraveler(2, 3) === 3, ['Grid: 4*4']); //Should return 3.
  console.assert(gridTraveler(8, 8) === 3432, ['Grid: 8*8']); //Should return 3432.
  console.assert(gridTraveler(18, 18) === 2333606220, ['Grid: 18*18']); //Should return 155117520
};

const timerName = 'gridTraveler';

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
