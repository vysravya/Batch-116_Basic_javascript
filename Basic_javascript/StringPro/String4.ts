
let A : string = "Hello we are fine and my House number is : 949@!_0303 and house is  pink color";

let myRemoveAlpha : string = A.replace(/[a-zA-Z]/g, "")
let myRemoveNum : string = A.replace(/[0-9]/g, "")
let withSpec : string = A.replace(/[a-zA-z0-9]/g, "")
let removeSpec : string = A.replace(/[^a-zA-z0-9]/g, "")

console.log(myRemoveAlpha)
console.log(myRemoveNum)
console.log(withSpec)
console.log(removeSpec)