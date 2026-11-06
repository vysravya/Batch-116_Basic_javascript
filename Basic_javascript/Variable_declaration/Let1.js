

let myfruit = "S40"  //declaring the value
console.log(myfruit)

myfruit = 50;  //re-assigning

console.log(myfruit)  //50

//let myfruit = "Sixty Years";  //re-declaring the value

{
    console.log(myfruit) //accessing outside block to into block
    let myflower = "Rose"
    console.log(myflower)  //accessing inside block 
}

//console.log(myflower)  //ReferenceError:myflower is not defined 