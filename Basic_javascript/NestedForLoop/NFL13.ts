 
 let f : string = "";
 
 for(let r : number = 10 ; r >= 1 ; r--)          //rows -10 to 1
 {
       for(let c : number = r ; c >= 1 ; c--)       //columns -r to 1
       {
             f += c;         
        }

        f += "\n"   
  }      
  
  console.log(f)