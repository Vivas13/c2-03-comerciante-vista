import Cl_mComerciante from "./Cl_mComerciante.js";

export default class Cl_vComerciante {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("formComerciante");
    this.vista.hidden = true;
    /** Indicar entradas clase Comerciante */
    this.inCedula = document.getElementById("formComercianteInCedula");
    this.inNombre = document.getElementById("formComercianteInNombre");
    this.inEdad= document.getElementById("formComercianteInEdad")
    this.inSexo= document.getElementById("formComercianteInSexo")
    this.inEdoCivil= document.getElementById("formComercianteInEdoCivil")

    this.btAceptar = document.getElementById("formComercianteBtAceptar");
    this.btAceptar.onclick = () => this.agregarComerciante();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  agregarComerciante() {
    /**
     * Renombrar mComerciante
     * Renombrar instancia "Comerciante" y construirla con las entradas respectivas
     */
    let Comerciante = new Cl_mComerciante({
      cedula: this.inCedula.value,
      nombre: this.inNombre.value,
      edad: this.inEdad.value,
      sexo: this.inSexo.value,
      EdoCivil: this.inEdoCivil.value,
    });
    /** Colocar nombre correcto del procesar */
    this.app.mPrestamo.procesarPersona(Comerciante);
    this.app.vPrestamo.reportarPersona(Comerciante);
    this.ocultar();
    this.app.vPrestamo.mostrar();
  }
}
