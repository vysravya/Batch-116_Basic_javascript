

function sumCount() : void
{
    let s : number = 0;

    for(let h = 6789; h <=6789578577; h++)
    {
        s++;
    }    
    console.log("The Number of times for loop executed : "+s)
}

let a : number = 17;
let b : number = 83;

setTimeout(()=> sumCount(),  10000);       //call later part --> call back function
console.log("The Sum of A and B is : "+(a+b))
