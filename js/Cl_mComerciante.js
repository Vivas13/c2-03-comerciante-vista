import Cl_mPersona from "./Cl_mPersona";

export default class Cl_mComerciante extends Cl_mPersona{
    constructor({cedula, nombre, edad, sexo, EdoCivil}){
        super(cedula, nombre, edad, sexo, EdoCivil)
    }

    Aprobado(){
        if(this.sexo=== "M")
        return "si"
        else if(this.sexo==="F" && this.EdoCivil===2)
        return "si"
        else
        return "no"
    }
}