//Arrays declaring method => Part 1
const myArr = [9,8,7,6,5];
const myString = ["Abdal","Hussain"];
const myArray = new Array(10,2,3,4)

// myArray.push(100);
// myArray.pop();
// myArray.unshift(8);
// myArray.shift();

// console.log(myArray.indexOf(4));
// console.log(myArray.includes(4));

const newArray = myArray.join();

// console.log(myArray);
// console.log(typeof myArray);

// console.log(newArray);
// console.log(typeof newArray);

// //slice and splice
// console.log("A ", myArray);
const myN1 = myArray.slice(1,3);
// console.log(myN1);

// console.log("B", myArray);
const myN2 = myArray.splice(1,3);
// console.log(myN2);
// console.log(myArray);

// +++++++++++++>>>>>>> :Part Two: <<<<<<<<++++++++++
const marvel_heroes = ["Ironman","Spiderman","Hulk"];
const dc_heroes = ["Superman","Flash","Batman"];

// marvel_heroes.push(dc_heroes);//This will Add Dc Value as 3rd Element.
// console.log(marvel_heroes);

// const All_heroes = marvel_heroes.concat(dc_heroes);//concat() will add two arrays and combine them into one array
// console.log(All_heroes[2]);

//For this purpose also used spread operator
// const newHeroes = [...marvel_heroes,...dc_heroes];
// console.log(newHeroes);
let real_new_array = [1,2,3,[2,3,5],[7,9,[45,99]]];
real_new_array = real_new_array.flat(Infinity);//flat() will merge it into one array,we can also add value like 1,2,3 etc and infinity also.
// console.log(real_new_array);

// console.log(Array.isArray("Abdal"));
// console.log(Array.from("Abdal"));//give us date in the form of ArrayS
// console.log(Array.from({name: "hitesh"}));//

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));//Array.Of() method combile value in the form of array











