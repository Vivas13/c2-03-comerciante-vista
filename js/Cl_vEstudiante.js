import Cl_mEstudiante from "./Cl_mEstudiante.js";

export default class Cl_vEstudiante {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("formEstudiante");
    this.vista.hidden = true;
    /** Indicar entradas clase Estudiante */
    this.inCedula = document.getElementById("formEstudianteInCedula");
    this.inNombre = document.getElementById("formEstudianteInNombre");
    this.inEdad= document.getElementById("formEstudianteInEdad")
    this.inSexo= document.getElementById("formEstudianteInSexo")
    this.inEdoCivil= document.getElementById("formEstudianteInEdoCivil")
    this.inNota= document.getElementById("formEstudianteInNota")

    this.btAceptar = document.getElementById("formEstudianteBtAceptar");
    this.btAceptar.onclick = () => this.agregarEstudiante();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  agregarEstudiante() {
    /**
     * Renombrar mEstudiante
     * Renombrar instancia "Estudiante" y construirla con las entradas respectivas
     */
    let Estudiante = new Cl_mEstudiante({
      Cedula: this.inCedula.value,
      Nombre: this.inNombre.value,
      Edad: this.inEdad.value,
      Sexo: this.inSexo.value,
      EdoCivil: this.inEdoCivil.value,
      Nota: this.inNota.value,

    });
    /** Colocar nombre correcto del  */
    this.app.mPrestamo.procesarPersona(Estudiante);
    this.app.vPrestamo.reportarPersona(Estudiante);
    this.ocultar();
    this.app.vPrestamo.mostrar();
  }
}
