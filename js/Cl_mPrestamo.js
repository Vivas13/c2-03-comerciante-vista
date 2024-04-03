

export default class Cl_mPrestamo{
    constructor(){
        this.cont_c_Aprobado_completo= 0
        this.cont_c_N_Aprobado=0
        this.cont_c_total=0
    }

    procesarPersona(Persona){
        if(Persona.Aprobado())

         if(Persona instanceof Cl_mComerciante && Persona.sexo==="F"){
         
         this.cont_c_Aprobado_completo++
         }
         else
         this.cont_c_N_Aprobado++

        this.cont_c_total++
    }
    Porc_c_Aprobado(){
        return this.cont_c_Aprobado_completo/this.cont_c_total*100
    }

    Porc_c_N_Aprobado(){
        return this.cont_c_N_Aprobado/this.cont_c_total*100
    }
}