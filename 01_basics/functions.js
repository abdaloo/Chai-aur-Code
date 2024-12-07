function sayMyName(user){
    if(!user){
        console.log("Please Enter Your Name: ");
        return ""
    }

    return `${user} just logged in`;    
}

console.log(sayMyName("Abdal"));




