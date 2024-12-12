const user = {
    username : "Abdal",
    price : 123,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage();
// user.username = "shehzad"
// user.welcomeMessage();

// console.log(typeof this);


// function chai(){
//     let username = "abdal"
//     console.log(this.username);
    
// }
// chai();

// const chai = function(){
//     let username = "abdal"
//     console.log(username);
    
// }
// chai();

//++++++++++++++++++++++Arrow function+++++++++++++++++

const chai = () => {
    let username = "abdal"
    console.log(this.username);//undefined: because arrow function do not bind their own "this " keyword
    
}
// chai();


// ++++++++++++++++ Explicit Return of Arrow function +++++++++++++++++++++

const addTwo = (one,two) => {
    return one + two;
}

// console.log(addTwo(2,3));

// ++++++++++++++++ Implicit Return pf Arrow Function +++++++++++++++++

const addThree = (one,two,three) => (one+two+three)// (one+two+three)= return statment ,this method exlude return keyword , we also exlude the braces from return statement

// printing objects using arrow function

const addObject = () => ({username: "Abdal"})// Without braces in return statment , this will print undefined

console.log(addObject());

