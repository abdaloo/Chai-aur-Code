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

//Exercise of random number b/w 1-20 or what number you want just change the b value.
let a = 1;
let b = 20;
let c = a + (b - a)*Math.random();
console.log(c);


