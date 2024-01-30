function fetchData(callback){
    setTimeout(()=> {
        const data ="Hello,world!";
        callback(data);
    }, 2000);
}


function process(data){
    console.log("Data received:", data);
}

console.log("Start");

fetchData(process);

console.log("End");

//using promises
function fetchData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const success= true;
 
            if(success)
            {
                const data = "hello world";
                resolve(data);
            }
            else{
                const error= "failded to fetch data";
                reject(error);
            }
        },2000)
    });
}
console.log("Start");


