// Write your solution here!
let cats= ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name){
cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    let new_array= [...cats,name];
    return new_array;
}

function prependCat(name){
    let new_array= [name,...cats];
    return new_array;
}

function removeLastCat(){
   let new_array=cats.slice(0,cats.length-1);
   return new_array;
}

function removeFirstCat(){
    let new_array= cats.slice(1,cats.length);
    return new_array;
}