/* *************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */

function getFizzBuzz(num) {
  return (num % 3 ? '' : 'Fizz') + (num % 5 ? '' : 'Buzz') || num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */

function getFactorial(n) {
  if (n === 1) {
    return n;
  }
  return n * getFactorial(n - 1);
}
/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */

function getSumBetweenNumbers(n1, n2) {
  const newArr = Array.from({ length: n2 - n1 + 1 }, (v, i) => n1 + i);
  return newArr.reduce((a, b) => a + b);
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */

function isTriangle(a, b, c) {
  const newArr = [a, b, c];
  const maxSide = Math.max(...newArr);
  const indexMax = newArr.indexOf(maxSide);
  const arrWithoutMax = newArr.filter((el, index) => index !== indexMax);
  return arrWithoutMax[0] + arrWithoutMax[1] > maxSide;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const isPointInsideRect = (x, y, {
    top, left, height, width,
  }) => y >= top && y <= top + height && x >= left && x <= left + width;

  return isPointInsideRect(rect1.left, rect1.top, rect2)
    || isPointInsideRect(rect2.left, rect2.top, rect1);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const { center, radius } = circle;
  const xVector = point.x - center.x;
  const yVector = point.y - center.y;
  const rVector = Math.sqrt(xVector ** 2 + yVector ** 2);

  return rVector < radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const obj = {};

  str.split('').forEach((item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  });

  const keys = Object.keys(obj);
  const search = keys.find((item) => obj[item] === 1);

  return search;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const [left, right] = a > b ? [b, a] : [a, b];

  const str = `${isStartIncluded ? '[' : '('}${left}, ${right}${isEndIncluded ? ']' : ')'}`;

  return str;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return String(num).split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const strCcn = String(ccn);
  const reversedArrCcn = strCcn.split('').reverse();
  const processedArrCcn = reversedArrCcn.map((digitStr, idx) => {
    if (idx % 2 !== 0) {
      const digit = Number(digitStr);
      let product = digit * 2;

      if (product > 9) {
        const digits = String(product);

        product = digits
          .split('')
          .map((item) => Number(item))
          .reduce((prev, cur) => prev + cur, 0);
      }

      return String(product);
    }

    return digitStr;
  });

  const processedCcn = processedArrCcn
    .reverse()
    .map((item) => Number(item))
    .reduce((prev, cur) => prev + cur, 0);
  const isValid = processedCcn % 10 === 0;

  return isValid;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const str = String(num);
  const sum = Number(str[0]);

  if (num < 10) return sum;

  const other = getDigitalRoot(str.slice(1));

  return other > 9 ? sum + getDigitalRoot(other) : getDigitalRoot(sum + other);
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  if (str.length % 2 !== 0) return false;

  let result = str;

  while (result.length > 1) {
    const lengthBefore = result.length;

    result = result.replace('[]', '').replace('{}', '').replace('()', '').replace('<>', '');

    const lengthAfter = result.length;
    const numberRemovedSymbols = lengthAfter - lengthBefore;

    if (!numberRemovedSymbols) break;
  }

  const isEmpty = result.length === 0;

  return isEmpty;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  const convertedArr = [];
  let number = num;

  if (number === 0) convertedArr.push(0);
  while (number) {
    const digit = number % n;

    convertedArr.push(digit);
    number = Math.floor(number / n);
  }

  return convertedArr.reverse().join('');
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(paths) {
  const processedPaths = paths
    .map((path) => path.split('/'));
  const [firstPathInPaths] = processedPaths;

  let result = '';

  firstPathInPaths.forEach((dir, dirIdx) => {
    const isCommon = processedPaths.every((path) => path[dirIdx] === dir);

    if (isCommon) {
      result += `${dir}/`;
    }
  });

  return result;
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const N = m2.length; // number of cols m1 must be equal to the number of rows m2
  const M = m1.length; // number of rows
  const P = m2[0].length; // number of cols
  const result = [];

  for (let i = 0; i < M; i += 1) {
    const row = [];

    for (let j = 0; j < P; j += 1) {
      const sum = [];

      for (let k = 0; k < N; k += 1) {
        const product = m1[i][k] * m2[k][j];

        sum.push(product);
      }

      const rowsSum = sum.reduce((prev, cur) => prev + cur, 0);

      row.push(rowsSum);
    }
    result.push(row);
  }

  return result;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const [firstRow, secondRow, thirdRow] = position;
  const firstHorizontal = [firstRow[0], secondRow[0], thirdRow[0]];
  const secondHorizontal = [firstRow[1], secondRow[1], thirdRow[1]];
  const thirdHorizontal = [firstRow[2], secondRow[2], thirdRow[2]];
  const topLeftRightBottomDiagonal = [firstRow[0], secondRow[1], thirdRow[2]];
  const bottomLeftRightTopDiagonal = [thirdRow[0], secondRow[1], firstRow[2]];
  const rows = [
    firstRow, secondRow, thirdRow,
    firstHorizontal, secondHorizontal, thirdHorizontal,
    topLeftRightBottomDiagonal, bottomLeftRightTopDiagonal,
  ];
  const hasRowSymbol = (row, symbol) => row.length === 3 && row.every((item) => item === symbol);
  const CROSS = 'X';
  const NOUGHT = '0';
  const isX = rows.some((row) => hasRowSymbol(row, CROSS));
  const isO = rows.some((row) => hasRowSymbol(row, NOUGHT));

  if (isX) { return CROSS; }
  if (isO) { return NOUGHT; }
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
