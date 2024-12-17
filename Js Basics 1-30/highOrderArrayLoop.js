//For of loop
const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num);
    
}

const greetings = "hello world~"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

//Map
const map = new Map()
map.set('USA',"United State of America")
map.set('IN',"India")
map.set('PAK',"Pakistan")

// console.log(map);

//map using for loop
for (const output of map) {
    // console.log(output);
}

// map with its seperate key and values
for(const [key, value] of map){
    // console.log(key, ':-', value);
    
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman',
// }

//not iterable using for of loop
// for(const [key,value] of myObject){
//     // console.log(key,':-',value);
    
// }


const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rd: "Ruby",
    swift: "Swift by apple"
}
//forin loop
for(const key in myObject){
    // console.log(`${key} shortcutt if for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"];

for (const key in programming){
   // console.log(programming[key]);
    
} 
//map does not iterate on forin loop
for (const key in map) {
    // console.log(map[key]);
    
}

//Foreach loop

const coding = ["js","ruby","java","python","cpp"]

//foreach with regular function
// coding.forEach( function (item){
//     console.log(item);
    
// })

//foreach with arrow function
// coding.forEach((item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoding = [
    {
        languageName : "javaScript",
        languageFileName: "JS"
    },
    {
        languageName : "Python",
        languageFileName: "py"
    },
    {
        languageName : "C++",
        languageFileName: "cpp"
    },
    
]

//These method use for retrieving values from database using foreach loop
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})


//Video No: 29, High order array loop.

//In this video we learned about forof loop, forin loop,
//relation of array,object with forof loop, as will as forin loop.

//Very useful video over all