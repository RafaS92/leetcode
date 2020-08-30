//27 Remove Element
function removeElement(nums, val) {
  if (!nums) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}

//9 Palindrome number
function isPalindrome(x) {
  if (x < 0) return false;
  let reverse = 0;

  for (let i = x; i >= 1; i = Math.floor(i / 10))
    reverse = reverse * 10 + (i % 10);
  return reverse === x;
}

//1480  Running Sum of 1d Array

function runningSum(nums) {
  let total = [];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    total.push(currentSum);
  }
  return total;
}

//7 Reverse Integer
var reverse = function (x) {
  hukk.candies;
  if (x < 0) return -1 * reverse(-x);
  const solution = x.toString().split("").reverse().join("");
  return solution > 2 ** 31 - 1 ? 0 : solution;
};

//1431 Kids Wtith the Greatest Number of Candies
function kidsWithCandies(candies, extraCandies) {
  const max = Math.max(...candies);
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    let cv = candies[i];
    result.push(cv + extraCandies >= max);
  }
  return result;
}

//1512 Number of Good Pairs JavaScript Solution
var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }

  return count;
};
