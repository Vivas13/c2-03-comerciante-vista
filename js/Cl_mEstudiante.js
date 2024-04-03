import Cl_mPersona from "./Cl_mPersona";

export default class Cl_mEstudiante extends Cl_mPersona {
    constructor({cedula, nombre, edad, sexo, EdoCivil, Nota}){
        super(cedula, nombre, edad, sexo, EdoCivil)
        this.Nota= Nota;
    }
    set Nota(Nota){
        this._Nota= +Nota;
    }

    get Nota(){
        return this._Nota
    }

    Aprobado(){
        if(this.Nota>17 && this.edad<20)
        return "si"
        else if(this.EdoCivil===2 && this.Nota>15)
        return "si"
        else
        return "no"
    }
}