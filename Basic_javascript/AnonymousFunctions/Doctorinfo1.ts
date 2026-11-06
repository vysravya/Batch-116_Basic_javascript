

function DoctorName(name : string) : void 
{
    console.log(name)
}
DoctorName("Druva")

function DoctorDoc(Medicine : (name : string) => void) : void     //here "(name : string) => void" is an anonymous function
{
    Medicine("Doctor")     //variable/parameter --> function -->calling the function
}

DoctorDoc(DoctorName)