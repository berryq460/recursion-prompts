// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

let factorial = function(n) {
     if(n === 0) {
        return 1;
     }else if (n < 0)
     {return null   
     }

    return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
}

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
function arraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
     if (arr[i] instanceof Array) { sum += arraySum(arr[i]);}
     if (arr[i] === Math.round(arr[i])) {sum += arr[i];}   
  }
 return sum;
}


// 4. Check if a number is even.
odd = function(n) {if (n%2 == 0) {return true} else {return false;}}

console.log(odd(8));
console.log(odd(5));


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
  return sum(n - 1);
};

function sum (n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

let range = function(x, y) { //recursive call (create the call stack)
  let  int = true;
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
    int = false;
    //x,y, is executed after the recursion call
  }
  if (x === y) return [];
  if (x+1 === y) return [];

 // clear after every recursive call
  let array = range(x, y-1);
  array.push(y-1);
  return int ? array : array.reverse();
};
///////////// iterative
// var range = function(cat,hat) {
//   const arrayRange = []
//   for (let i = cat; i < hat; i++) {
//    arrayRange.push(i);

//   }
//   return(arrayRange); 

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

let exponent = function(base, exp) {
  let Neg = false;
  if (exp < 0) {
    Neg = true;
    exp *= -1;
  }
  if (exp === 0) return 1;
  let  result = base * exponent(base, exp-1);
  return !isNeg ? result : 1/result;
};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

let powerOfTwo = function(n) {
      if (n < 1) {
        return false;
    } else if (n === 1) {
        return true;
    } return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.

let reverseStr = function(str) {
  if(str === "") {
    return "";
  }else{
    return reverseStr(str.substr(1)) + str.charAt(0); 
    }
   };

// 10. Write a function that determines if a string is a palindrome.

let pali = function(string) {
  if (array.length === 1) return [array[0]];
  let list = reverseArr(array.slice(1, array.length));
  list.push(array[0]);
  return list;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
let modulo = function(x, y) {
  if (y === 0) { return NaN; }

    if (x < 0) { return -modulo(-x, y); }
    if (y < 0) { return modulo(x, -y); } 
    if (x < y) { return x; }

    return modulo(x -y, y); 
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

let multiplyNums = function(x, y) {
  if(y > 0) {
    return(x + multiplyNums(x, y-1));
  }
  else if(y < 0) {
    return - multiplyNums(x, -y);
  }
  return 0;
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).

let divide = function(x, y) {
  let negNums = false;
  if (x < 0) {
    negNums = !negNums;
    x = -x;
  }
  if (y < 0) {
    negNums = !negNums;
    y = -y;
  }
  if (y === 0) return NaN;
  if (x === 0) return 0;
  if (x === y) return 1;
  if (x < y) return 0;
  let result = divide(x-y, y) + 1;
  return negNums ? -result : result;  
};


// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
let greatcd = function(x, y) {
  if(x < 0 || y < 0) return null;
  if(x === y) return x;
  if(x > y) return greatcd(x-y, y);
  if(x < y) return greatcd(x, y-x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true

let compareStr = function(str1, str2) {
  if(strChar1.length != 0 && strChar2.length != 0) return false;
  if(strChar1.length === 0 && strChar2.length === 0) return true;
  return compareStr(strChar1.substring(1), strChar2.substring(1)); 
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

let createArray = function(str) {
  if(str.length === 1) return [str[0]];
  let letterList = createArray(str.substring(1)); //
  letterList.unshift(str[0]);
  return letterList;
};

// 17. Reverse the order of an array

var reverseArr = function(array) {
  if (string.length === 0) return true;
  if (string.length === 1) return true;
  if (string.charAt(0).toLowerCase() !== string.charAt(string.length-1).toLowerCase()) {
    return false;
  }
  let str = string.substring(1, string.length-1);
  return palindrome(str);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

let buildList = function(value, length) {
  if (length === 0) { //if length is = 0, return nada
    return [];
  }
  return [value].concat(buildList(value, length -1)); 
};

