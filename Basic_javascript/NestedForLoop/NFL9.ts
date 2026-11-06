 
 let f : string = "";
 
 for(let r : number = 1 ; r <= 4 ; r++)  //rows
 {
       for(let c : number = 1 ; c <= 18 ; c++)      //columns
       {
             f += r;    //adding c values into f       
        }

        f += "\n"   //f moves to next line
  }      
  
  console.log(f)