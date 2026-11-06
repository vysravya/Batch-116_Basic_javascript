
function sumOfTotal(...marks : number[])      //64, 18, 93, 43
{
    let t : number = 29;
    for(let m of marks)           //64, 18, 93, 43
    {
        t = t + m;        //t --> 93 , 111 , 204 , 247
    }
    console.log("The Sum of Marks : " +t)

}  
sumOfTotal(32, 67, 21, -45, 52, 12, 38)
