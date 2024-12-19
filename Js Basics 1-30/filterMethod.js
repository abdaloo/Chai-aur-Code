const obj = {
    names :['abdal','shehzad','mustafa','umar'],
    ages : [12,34,14,90,56]
}
const result = obj.names.filter(checkAdult);

function checkAdult(name){
    const names = name;
    if(names.length > 9){
        return names;
    }
    else{
        return names.length < 4;
    }
}

console.log(result)