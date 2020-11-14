let factorial = function (n) {
  if (n < 0) {
    return null;
  } else if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. 
let sum = function (array) {
  let i = array.length - 1;
  if (i < 0) {
    return 0;
  }
  return array[i] + sum(array.slice(0, i));
};

// 3. 

let arraySum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let val = array[i];
    if (Array.isArray(val)) {
      sum += arraySum(val);
    } else {
      sum += val;
    }
  }
  return sum;
};

// 4. Check if a number is even.
let Even = function (n) {
  // if (n < 0) {
  //   n = Math.abs(n);
  // }
  if (n == 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }
  // return isEven(n - 2);
  return Even(Math.abs(n) - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function (n) {
  if (n === 0 || n === 1) {
    return 0;
  } else if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  } else {
    return n - 1 + sumBelow(n - 1);
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
let range = function (x, y) {
  let integ = true;
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
    integ = false;
  }

  if (x === y || x + 1 === y) {
    return [];
  }
  let array = range(x, y - 1);
  array.push(y - 1);
  return integ ? array : array.reverse();
};

// 7. Compute the exponent of a number.
let exponent = function (base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }
  if (exp > 0) {
    return base * exponent(base, exp - 1);
    // return exponent(base, exp / 2) * 2;
  } else if (exp < 0) {
    return exponent(base, exp + 1) / base;
    
  }
};

// 8. Determine if a number is a power of two.
let powerOfTwo = function (n) {
  power = n / 2;
  if (n < 1) {
    return false;
  } else if (n === 1) {
    return true;
  }
  return powerOfTwo(power);
};

// 9. Write a function that reverses a string.
let reverse = function (string) {
  if (string === "") {
    return "";
  } else {
    return reverse(string.substr(1)) + string.charAt(0);
  }
};

// 10. Write a function that determines if a string is a palindrome.
let palindrome = function (string) {
  const checkString = string.replace(/\W/g, "").toLowerCase();

  if (checkString.length === 1) {
    return true;
  } else if (checkString.length === 2) {
    return checkString[0] === checkString[1];
  } else if (checkString[0] === checkString.slice(-1)) {
    return palindrome(checkString.slice(1, -1));
  }
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the

let modul = function (x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x < 0) {
    return -modul(-x, y);
  } else if (y < 0) {
    return modul(x, -y);
  } else if (x < y) {
    return x;
  }
  return modul(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

let multiply = function (x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if (y < 0) {
    return -x + multiply(x, y + 1);
  } else {
    return x + multiply(x, y - 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).

let divide = function (x, y) {
  debugger;
  if (x === 0 && y === 0) {
    return NaN;
  } else if (x < 0) {
    return -divide(-x, y);
  } else if (y < 0) {
    return -divide(x, -y);
  } else if (x < y) {
    return 0;
  } else {
    return 1 + divide(x - y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.

let GCD = function (x, y) {
  if (x < 0 || y < 0) {
    return null;
  } else if (!y) {
    // this base case stops the recursion once y equals zero
    return x;
  } else {
    return GCD(y, x % y); // recursively call the gcd function with params y & the remainder of x minus y
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.

let compareStr = function (string1, string2) {
  if (
    (string1.length !== 0 && string2.length === 0) ||
    (string1.length === 0 && string2.length !== 0)
  ) {
    if (string1[0] !== string2[0]) {
      return false;
    }
  } else if (string1.length === 0 && string2.length === 0) {
    if (string1[0] === string2[0]) {
      return true;
    }
  }
  return compareStr(string1.slice(1), string2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

let createArray = function (str) {
  let strArr = [];
  if (str.length === 0) {
    return strArr;
  } else {
    strArr.push(str.charAt(0));
    return strArr.concat(createArray(str.slice(1, str.length)));
  }
};

// 17. Reverse the order of an array

let reverseArray = function (array) {
  revArray = [];
  if (array.length === 0) {
    return revArray;
  } else {
    return revArray.concat(reverseArray(array.slice(1)), array[0]);
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

let buildList = function (value, length) {
  let builtL = [value];
  if (length === 0 || length === 1) {
    return builtL;
  } else {
    return builtL.concat(buildList(value, length - 1));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']

let fizzBuzz = function (n) {
  let fB = [];

  if (n === 1) {
    return fB.concat("1");
  } else if (n % 3 === 0 && n % 5 === 0) {
    fB.push("FizzBuzz");
  } else if (n % 3 === 0) {
    fB.push("Fizz");
  } else if (n % 5 === 0) {
    fB.push("Buzz");
  } else {
    fB.push(n + "");
  }

  return fizzBuzz(n - 1).concat(fB);
};