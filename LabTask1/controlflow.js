let age=40;
if(age>=18)
{
    console.log("Adult");
    
}
else if(age>=13)
{
    console.log("Teenager");
}

else {
    console.log("Minor");
}


let anotherage=16;
let status;

switch(true)
{
    case anotherage >=18:
    status = "Adult";
    break;
    case anotherage >=13:
    status = "Teenager";
    break;
    default:
        status = "Minor";
}

console.log(status);


let x = ['a','b','c','d','e'];
//For loop

for(let i=0;i<3;i++)
{
    console.log(x[i])
}

let y = ['a','b','c','d','e'];

let j = 0 ;
while (j<4)
{
    console.log(y[j]);
    j++;
}
while (j<2);

let s = ['a','b','c','d','e'];
//for in loop
for(let n in s)
{
    console.log(s[n]);
}

let r = ['a','b','c','d','e'];
//for of loop

for(let e of r)
{
    console.log(e);
}

