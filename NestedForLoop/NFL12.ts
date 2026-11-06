 
 let f : string = "";
 
 for(let r : number = 1 ; r <= 10 ; r++)  //rows
 {
       for(let c : number = 10 ; c >= r ; c--)      //columns
       {
             f += c;    //adding c values into f       
        }

        f += "\n"   //f moves to next line
  }      
  
  console.log(f)