var myage ="22"  //we are declaring value
console.log(myage)   //22

myage = "22"  //re-assigning
console.log(myage)  //22

var myage = 5678   //re_declaring
console.log(myage)  //5678

{
    console.log(myage)  //accessing data outside into the block

    var myfruit = "mango"
    console.log(myfruit)  //accessing inside data inside block  //mango
}

console.log(myfruit)  //accessing inside block into outside block  //mango