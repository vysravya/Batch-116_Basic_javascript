const mymonth ="November"  //we are declaring the value
console.log(mymonth)

//mymonth ="Day"  //re-assigning  //TypeError: Assignment to constant variable.

//const mymonth= "Monday"  //re-declaring
//console.log(mymonth)  
{
    console.log(mymonth)  //accessing outside data to inside of block //November
    const myname = "Sravya"
    console.log(myname)  //inside data into inside of a block  //Sravya
}

//console.log(myname)  //accessing inside of a block into outside of a block  //ReferenceError: my: