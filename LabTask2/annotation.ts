let a : number = 10;
let b : string = "Hello";
let c : boolean = true ;

function add(a:number,b:number): number{
    return a+b ;
}

function sub(a:number, b:number): number {
    return a-b ;
}

function simplification (a:number,b: number)
{
    return a+b*a+b-a;
}

console.log(add(10,20));
console.log(sub(20,10));
console.log(simplification(10,5));
console.log(c);


type Person = {id: number , name: string};
let p : Person = {id:1,name :"John"};
console.log(p);

let z : Person ={id : 2 , name :"Adam"};
console.log(z);

let y : number | string ;

 y = 10 ;
 console.log(y);


 let l : "Red" | " Green " | "Blue" ;
 l= "Red";
 console.log(l);
