// first method
(function chai(value){//Names IIFI with parameters
    console.log("Abdal",value);
})("Hussain");//IIFI scope are limited to its function , we cannot access its variable or function
//when we wrote two IIFI function, we can put a semi colon at the end of first IIFI, bcz it gives us error 


//Second method
(() => {// We also use arrow function in IIFI
    console.log("Hi");
})();

