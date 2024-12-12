//Function with array Values
function calculateCartValue(...values){// (...) these operator are called Spread Operator, It takes values and store it in an Array  
    return values[4];
}
// console.log(calculateCartValue(22,33,4,55,666));




//+++++++++++++++++++++
//Function with Object Values

const user = {
    userName : "abdal",
    price : "200"
}

function itemPrice(anyThing){
    return `userName is ${anyThing.userName} and price is ${anyThing.price}`// A way of getting Objects Values
}

// console.log(itemPrice(user));//
//++++++++++++++++++
//Second object
const user2 = {username2 : "Shehzad",price : "22"}

function itemWieght(anyWhere,why){
    return `username is ${anyWhere.username2} and ${why.userName} and price is ${anyWhere.price} and ${why.price}`
}

// console.log(itemWieght(user2,user));// Call two object in one function

//+++++++++++

function no3Function(value){
    console.log( `userName is ${value.user} and price is ${value.price}`);
}

// no3Function({    // we can also send direct arguments as objects values
//     user: "Hussain",
//     price: 3
// })



//+++++++++++++++++ declaring array and return specific value

const myArray = [33,4,555,666,777];

function gettingArray(arrayValue){
    return arrayValue[2];
}

// console.log(gettingArray(myArray));
console.log(gettingArray([22,33,44,55,66]));//same as above objects

