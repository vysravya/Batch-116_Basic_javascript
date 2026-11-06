

function accountCreate(username : string , facebook  ? : number)
{
    if(facebook == undefined)    //== comparsion
    {
        console.log("Hai I am Creating my Gmail account and user name as : " +username)
    }

      else
      {
         console.log("Hai I am in the Bank for creating my Gmail account with Customer name as : " +username)
      }   

    
}


accountCreate("Ravindar", 240729)
    
