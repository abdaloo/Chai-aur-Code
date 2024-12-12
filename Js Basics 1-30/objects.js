//Method No: 1=> Singleton in Constructor Method of Creating Objects
// const obj = new object();
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
  arra: ["Hello","World"],//Array Declaring

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
// console.log(JsUser.Symbol);
;
//++++++++++Objects Part two++++++++++++

// const tinder = new Object(); we can also write same code as following
const tinder = {};

tinder.id = "abc123";
tinder.name = "Sammy";
tinder.isLoggedIn = false;

// console.log(tinder);

const mmfs = {
  employes: {
    fullName: {
      firstEmp: "Amjad Khan",
      secondEmp: "Jamal Khan",
      thirdEmp: "Abdal Khan",
    }
  }
}

// console.log(mmfs.employes.fullName.thirdEmp);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = {5:"a",6:"b"};

const obj4 = Object.assign({},obj1,obj2,obj3);//assign() method merge two or more than two objects
// const obj4 = {obj1,obj2,obj3};

// console.log(obj4);
// console.log(obj1,obj2,obj3);

//we also merge objects like arrays using Spread Operator (...)
const obj5 = {...obj1,...obj2,...obj3};
// console.log(obj5);


const users = [//arrays
  {
    id: "1",
    email: "abdalhussain@gmail.com"
   },
  {
    id: "2",
    email: "shehzadhussain@gmail.com"
   },
  {
    id: "3",
    email: "hussain@gmail.com"
   },
  
]

// console.log(users[1].email);
// console.log(users[2].email);
// console.log(users[0].id);

console.log(tinder);
console.log(Object.keys(tinder))//keys() method gives us keys of an object
console.log(Object.values(tinder))//values() method gives us values of an object

console.log(Object.entries(tinder));//entries() method gives us an array under array

console.log(tinder.hasOwnProperty('isLoggedIn'));


