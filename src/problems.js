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

//1108 Defanging an IP Address JavaScript Solution
var defangIPaddr = function (address) {
  let result = "";

  for (let i = 0; i < address.length; i++) {
    let char = address[i];
    char === "." ? (result += "[.]") : (result += char);
  }

  return result;
};

//1365 How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function (nums) {
  let result = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    cn = nums[i];

    for (let j = 0; j < nums.length; j++) {
      let num = nums[j];

      if (cn > num) count++;
    }

    result.push(count);
    count = 0;
  }

  return result;
};

//1342 Number of Steps to Reduce a Number to Zero
var numberOfSteps = function (num) {
  let count = 0;
  if (num < 0) return 0;

  while (num > 0) {
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    count++;
  }

  return count;
};
