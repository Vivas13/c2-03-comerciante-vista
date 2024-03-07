

export default class Cl_mPrestamo{
    constructor(){
        this.cont_c_aprobado_completo= 0
        this.cont_c_no_aprobado=0
        this.cont_c_total=0
    }

    procesarPersona(persona){
        if(persona.aprobado())

         if(persona.typeofCl_mComerciante && persona.sexo==="F")
         
         this.cont_c_aprobado_completo++
        
         else
         this.cont_c_no_aprobado++

        this.cont_c_total++
    }
    Porc_c_Aprobado(){
        return this.cont_c_aprobado_completo/this.cont_c_total*100
    }

    Porc_c_N_Aprobado(){
        return this.cont_c_no_aprobado/this.cont_c_total*100
    }
}