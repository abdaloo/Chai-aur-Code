//Method No: 1=> Singleton in Constructor Method of Creating Objects
//Method No: 2=> Object Literals

//Object Literals

const mySymbol = Symbol("Key1");

const JsUser = {
  name: "Hitesh",
  age: 18,
  "father name": "M Hussain",
  [mySymbol]: "mykey1",
  location: "Jaipur",
  email: "abdal@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  greeting : function(){
    return ("Hello world");
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

// JsUser.greeting = function () {
//   console.log("Hello JS user");
  
// }
//console.log(JsUser.greeting());//Accessing function of Object
//console.log(JsUser.arra[1]);//Accessing Array using object



