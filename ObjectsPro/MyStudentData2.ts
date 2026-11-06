interface studentdata   //rough data
{
    stddid : number,
    stdname : string,
    stdsalary : number,
    stddesignation : string,
    status : boolean,
    stdaddress : {        //stdaddress ---> sub object
                    stdstreet : string,
                    stdlocation : string,
                    stdpincode : number,
                    stdstate : string
                 }
}

let stdinfo : studentdata =            //converts to fair data as stddata
{
    stdid : 578,
    stdname : "catherine",
    stddesignation : "Engineer student",
    stdstream : "cse",
    status : true,
    stdaddress :
                {
                    stdstreet : "Road No : 10",
                    stdlocation : "Karimnagar",
                    stdpincode : 500072,
                    stdstate : "Telangana",
                }
 }           
 
 console.log(stdinfo)
 stdinfo.timings = "Morning to Afternoon"
 console.log(stdinfo)
  
 

 