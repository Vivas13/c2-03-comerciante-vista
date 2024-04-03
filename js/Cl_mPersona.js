
export default class Cl_mPersona{
    constructor(cedula, nombre, edad, sexo, EdoCivil){
        this.cedula= cedula;
        this.nombre= nombre;
        this.edad= edad;
        this.sexo= sexo;
        this.EdoCivil= EdoCivil;
    }

    set cedula(cedula){
        this._cedula= +cedula;
    }

    get cedula(){
        return this._cedula
    }
     set nombre(nombre){ 
        this._nombre= +nombre;
    }

     get nombre(){
        return this._nombre;
    }
    set edad(edad){
        this._edad= +edad;
    }

    get edad(){
        return this._edad
    }
    set sexo(sexo){
        this._sexo= +sexo;
    }

    get sexo(){
        return this._sexo
    }
    set EdoCivil(EdoCivil){
        this._EdoCivil= +EdoCivil;
    }

    get EdoCivil(){
        return this._EdoCivil
    }

    



}