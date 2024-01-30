let numbers = [1, 2 , 3];
let [a , b ,c ] = numbers ; 
console.log (a , b , c);

let person = { name :"John" , age :20};
let {name , age} = person ;
console.log ( name, age);


function printPersonData({name,age})
{
    console.log(`Name: ${name}, Age: ${age}`);
}

printPersonData(person);