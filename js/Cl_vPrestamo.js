import Cl_mComerciante from "./Cl_mComerciante";
import Cl_mEstudiante from "./Cl_mEstudiante";


export default class Cl_vPrestamo {
  constructor(app) {
    this.app = app;
    this.vista = document.getElementById("formPrestamo");
    this.tabla = document.getElementById("formPrestamoTabla");
    this.btAgregarComerciante = document.getElementById("formPrestamoBtAgregarComerciante");
    this.btAgregarEstudiante = document.getElementById("formPrestamoBtAgregarEstudiante");
    /** declarar etiquetas de salidas clase Prestamo */
    this.lblReporte1 = document.getElementById("formPrestamoLblReporte1");
    this.lblReporte2 = document.getElementById("formPrestamoLblReporte2");

    this.btAgregarComerciante.onclick = () => {
      this.ocultar();
      this.app.vComerciante.mostrar();
    };
    this.btAgregarEstudiante.onclick = () => {
      this.ocultar();
      this.app.vEstudiante.mostrar();
    };
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  /** Cambiar nombre de "Persona" por el nombre correcto */
  reportarPersona(Persona) {
    /**
     * Renombrar parámetro "Persona"
     * Indicar campos de la tabla
     * */
    this.tabla.innerHTML += `
    <tr>
    <td>${Persona.Cedula}</td>
    <td>${Persona.Nombre}</td>
    <td>${Persona.Edad}</td>
    <td>${Persona.Sexo}</td>
    <td>${Persona.EdoCivil}</td>
    <td>${Persona.Nota ? Persona.Nota : "--"}</td>
    <td>${Persona.Aprobado()}</td>
    </tr>`;

    /** Asignar valores a etiquetas de salida */
    this.lblReporte1.innerHTML = this.app.mPrestamo.Porc_c_Aprobado();
    this.lblReporte2.innerHTML = this.app.mPrestamo.Porc_c_N_Aprobado();
    
  }
}
