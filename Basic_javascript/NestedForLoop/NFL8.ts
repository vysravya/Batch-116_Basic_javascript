 
 let f : string = "";
 
 for(let c : number = 1 ; c <= 3 ; c++) 
 {
       for(let c : number = 1 ; c <= 8 ; c++)      //columns
       {
             f += c;    //adding c values into f       
        }

        f += "\n"   //f moves to next line
  }      
  
  console.log(f)