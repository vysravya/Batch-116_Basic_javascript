function userAge() : Promise<string>        //it is a promised based function
{
    return new Promise((resolve, reject) => {
        let age : number = 22;
        if(age > 18)
        {
            resolve("User can utilize his/her VOTE")
        }    
        else
        {
            reject(new Error("User should not VOTE"))
        }

    });
}

//creating data to check using async and await
 
async function ageCheck() : Promise<void>
{
    let eligible : string = await userAge();
    console.log(eligible)
} 

ageCheck();    //we are calling async function