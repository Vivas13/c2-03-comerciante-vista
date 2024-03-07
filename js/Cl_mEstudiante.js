import Cl_mPersona from "./Cl_mPersona";

export default class Cl_mEstudiante extends Cl_mPersona {
    constructor({cedula, nombre, edad, sexo, Edocivil, nota}){
        super(cedula, nombre, edad, sexo, Edocivil)
        this.nota= nota;
    }

    Aprobado(){
        if(this.nota>17 && this.edad<20)
        return "si"
        else if(this.EdoCivil===2 && this.nota>15)
        return "si"
        
        return "no"
    }
}