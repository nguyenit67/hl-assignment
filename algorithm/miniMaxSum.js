/**
 * @param {Number[] | string} arr
 */
function miniMaxSum(arr) {
  const numberArray = Array.isArray(arr)
    ? arr
    : arr.trim().split(/\s+/).map(Number);
  const bigIntArray = numberArray.map(BigInt);
  const sortedArray = bigIntArray.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  // Minimum sum will equal the sum of the first 4 numbers
  // as they are the smallest numbers in the sorted array
  const minSum = sortedArray.slice(0, 4).reduce((acc, curr) => acc + curr);

  // Maximum sum will equal the sum of the last 4 numbers
  // as they are the largest numbers in the sorted array
  const maxSum = sortedArray.slice(1, 5).reduce((acc, curr) => acc + curr);

  return `${minSum} ${maxSum}`;
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));
console.log(miniMaxSum(Array(5).fill(Number.MAX_SAFE_INTEGER)));
console.log(miniMaxSum("4 5 6 7  8"));
