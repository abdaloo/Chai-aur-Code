//Method No: 1=> Singleton in Constructor Method of Creating Objects
//Method No: 2=> Object Literals

//Object Literals

let mySymbol = Symbol("Key1");

const JsUser = {
  name: "Abdal",
  age: 22,
  "father name": "M Hussain",
  
  Symbol: "0",
  location: "Tarnab",
  email: "abdal@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],//Array Initialization
  greeting : function(){//Function Initialization
    // return ("Hello world");
    console.log("Hello world");
  },
  arra: ["Hello","World"],

}

// console.log(JsUser["email"])
// console.log(typeof JsUser[mySymbol]);

JsUser.email = "hitesh@chatchpt.com";
// console.log(JsUser.email);

//Object.freeze(JsUser);//It Freeze the value of object from Initializing other values added to object keys
JsUser.email = "hitesh@microsoft.com";

// console.log(JsUser.email);

JsUser.greeting = function () {
  console.log(`Hello JS user: ${this.name}`);
  
}
//console.log(JsUser.greeting());//Accessing function of Object
//console.log(JsUser.arra[1]);//Accessing Array using object
console.log(JsUser.Symbol);
;


