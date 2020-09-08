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

//771. Jewels and Stones

var numJewelsInStones = function (J, S) {
  let count = 0;
  for (let i = 0; i < J.length; i++) {
    for (let x = 0; x < S.length; x++) {
      if (J[i] === S[x]) count++;
    }
  }

  return count;
};

//1528

var restoreString = function (s, indices) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join("");
};

//1295
var findNumbers = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let n = String(nums[i]);

    if (n.length % 2 == 0) {
      count++;
    }
  }

  return count;
};

//

var subtractProductAndSum = function (n) {
  let prod = 1;
  let sum = 0;
  let nums = String(n).split("");
  for (let i = 0; i < nums.length; i++) {
    let x = Number(nums[i]);
    prod *= x;
    sum += x;
  }
  return prod - sum;
};

//709 To lower case

var toLowerCase = function (str) {
  return str.toLowerCase();
};

//595

//SELECT name,population,area FROM World WHERE area >= 3000000 OR population >= 25000000

//1323. Maximum 69 Number
var maximum69Number = function (num) {
  let ns = String(num).split("");

  for (let i = 0; i < ns.length; i++) {
    let int = Number(ns[i]);
    if (int !== 9) {
      ns[i] = 9;
      break;
    }
  }

  return Number(ns.join(""));
};

//1351

var countNegatives = function (grid) {
  let counter = 0;
  grid.forEach((arr) => {
    arr.forEach((num) => {
      if (num < 0) {
        counter++;
      }
    });
  });
  return counter;
};

//1389

var createTargetArray = function (nums, index) {
  let target = [];

  for (let i = 0; i < index.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }

  return target;
};

//674 Longest Continuous Increasing Subsequence

var findLengthOfLCIS = function (nums) {
  if (nums.length == 0) return 0;
  let max = 1;
  let currentLenght = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentLenght++;
      max = Math.max(currentLenght, max);
    } else {
      currentLenght = 1;
    }
  }
  return max;
};

//1431. Kids With the Greatest Number of Candies

var busyStudent = function (startTime, endTime, queryTime) {
  let result = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      result++;
    }
  }
  return result;
};

// 1266 - Minimum Time Visiting All Points JavaScript Solution

var minTimeToVisitAllPoints = function (points) {
  let count = 0;
  let i = 0;

  while (i < points.length - 1) {
    let [x1, y1] = points[i];
    let [x2, y2] = points[i + 1];

    count += Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
    i++;
  }

  return count;
};

// 1464 Maximum Product of Two Elements in an Array JavaScript Solution

var maxProduct = function (nums) {
  let sort = nums.sort(function (a, b) {
    return b - a;
  });

  return (sort[0] - 1) * (sort[1] - 1);
};

//1221. Split a String in Balanced Strings

var balancedStringSplit = function (s) {
  let count = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "L" ? balance++ : balance--;
    if (balance == 0) {
      count++;
    }
  }

  return count;
};

//1304 Find N Unique Integers Sum up to Zero Solution & Explanation

var sumZero = function (n) {
  let array = [];

  if (n % 2 !== 0) {
    array.push(0);
  }

  for (let i = 0; i < Math.floor(n / 2); i++) {
    array.push(n - i, -n + i);
  }

  return array;
};
