//Number
const score = 400;
// console.log(score);

const balance = new Number(100);

// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const other = 123.343233;
// console.log(other.toPrecision(5));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());

//Math
// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.11));

// console.log(Math.max(1,2,3,4));
// console.log(Math.min(1,2,3,4));

/*
console.log(Math.random());//0-1
console.log((Math.random()*10)+1);//
console.log(Math.floor(Math.random()*10) + 1);//1-9

const min = 10;
const max = 20;


console.log(Math.floor(Math.random() * (max - min + 1)) + min);
*/
/*
console.log(Math.random());//It give us values b/w 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));//1-10
*/

/*
//Exercise of random number b/w 1-20 or what number you want just change the b value.
let a = 1;
let b = 20;
let c = a + (b - a)*Math.random();
console.log(c);
*/


// //Q1: Round a number
// function roundNumber(num) {
//    let a = Math.round(num);
//    return a;
//   }
  
//   console.log(roundNumber(4.6)); // 5
//   console.log(roundNumber(2.9)); // 4
  
//Q2: Geneerate Random Numbers
// function randomNumber() {
//     let a = 1;
//     let b = 100;
//     let c = a + (b - a)*((Math.random()));
//     c = Math.floor(c);
//     return c;
//   }
  
//   console.log(randomNumber()); // A random number between 1 and 100
  
 // console.log(Math.floor(1 + ((100 -1) * Math.random())));//2nd method of finding random numbers
  

//  //Q3: Convert String to Number:
//  function convertToNumber(str) {
//     let number = Number(str);    
//     return number;
//   }
//   console.log(convertToNumber("123.45")); // 123.45
  
//Q4: Find Maximum and Minimum

// function findMaxAndMin(arr) {
//     if(arr.length === 0){
//         return "Array is empty";
//     }

//     let max = Math.max(...arr);
//     let min = Math.min(...arr);

//     return {max,min};
//   }
  
//   console.log(findMaxAndMin([10, 20, 5, 40, 15])); 
//   // { max: 40, min: 5 }
  
//Q5: Calculate Power
// function calculatePower(base, exponent) {
//     let powerNum = Math.pow(base,exponent)
//     return powerNum;
//   }
  
//   console.log(calculatePower(2, 3)); // 8
//   console.log(calculatePower(5, 2)); // 25
  
//Q6: Absolute Value
// function absoluteValue(num) {
//     let AbsoluteNum = Math.abs(num);
//     return AbsoluteNum;
//   }
  
//   console.log(absoluteValue(-10)); // 10
//   console.log(absoluteValue(7)); // 7
  
//Q7: Check if a Number is Finite
// function isFiniteNumber(num) {
//     let finiteNum = Number.isFinite(num);
//     return finiteNum;
//   }
  
//   console.log(isFiniteNumber(42)); // true
//   console.log(isFiniteNumber(Infinity)); // false
  
//Q8: Fixed Decimal Places
// function toTwoDecimalPlaces(num) {
//     let number = num.toFixed(2);
//     return number;
//   }
  
//   console.log(toTwoDecimalPlaces(3.14159)); // 3.14
//   console.log(toTwoDecimalPlaces(7)); // 7.00
  
//Q9: Generate Random Integers
// function randomInteger(min, max) {
//     let RandomNum = Math.floor( min + ((max - min)*Math.random() + 1));
//     return RandomNum;
//   }
  
//   console.log(randomInteger(90, 100)); // A random number between 10 and 20
  
//Q10: Finding Square Root
// function squareRoot(num) {
//     let number = Math.sqrt(num);
//     return number;
//   }
  
//   console.log(squareRoot(2)); // 4
//   console.log(squareRoot(25)); // 5
  