interface father   //rough data
{
    fname : string,
    fage : number,
    fhobbies: string,
    fDOB : string,
}

  interface daughter
  {
    dname : string,
    dage : number,
    dhobbies: string,
    dDOB : string,
    
  }
  let fadata : father =
  {
     fname : "Ravindar",
     faage : 40,
     fahobbies : "Loving me",
     faDOB : "19 Dec 1990"
  }

    let ddata : daughter =
  {
     ddata : "sravya",
     dage : 23,
     dhobbies :  "studying",
     dDOB : "19 09 2004"
  }


  let daughterfather= {...fadata, ...ddata}

  console.log(daughterfather)
