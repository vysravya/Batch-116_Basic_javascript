 
 let f : string = "";
 
 for(let r : number = 1 ; r <= 5 ; r++)   // FIXED <= 5      
 {
       for(let c : number = 1 ; c <= 11 ; c++)     // FIXED <= 11    
       {
            if((r + c) % 2 == 0)   
            {
             f += "1" ;        
            }
            else
            {  
               f += "0" ;   
            }      
      }    
      f+= "\n"     // FIXED \n
}   
    
  console.log(f)