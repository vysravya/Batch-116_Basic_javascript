
let a : number = 15;
let b : number = 80;

try
{
let c = new Array(-4)
console.log("The Number of stored elements in C is ; "+c.length)
}
catch(myprmerr)
{
      console.log("Please provide valid positive integers for Array length")
}
console.log("The Sum of A and B is : "+(a+b))