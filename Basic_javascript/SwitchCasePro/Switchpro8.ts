let m : string = "Blue";

switch(m)
{
    case "Red" : console.log("Color is Red");
        break;

    case "Blue" : {
        let r : number = 66;
        console.log("The Square of R is :" +(r*r)) ;
        break;
    }                
        
    case "White" : console.log("Color is White");
        break;

    case "Orange" : console.log("color is Orange");
        break;

    case "Maroon" : console.log("Color is Maroon");
        break;

    case "Yellow" : console.log("Color is Yellow");
        break;

    case "Green" : console.log("Color is Green");
         break;

    case "Black" : console.log("Color is Black");
        break;  

    default : console.log("Incorrect Color Code");         
}    
