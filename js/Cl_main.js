import Cl_vPrestamo from "./Cl_vPrestamo.js";
import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_vComerciante from "./Cl_vComerciante.js";
import Cl_mPrestamo from "./Cl_mPrestamo.js";
/** Reemplazar en todo el documento por el nombre correcto de cada clase:
 * Cl_vPersona, Cl_vPrestamo, Cl_mPrestamo, Cl_mPersona
 * Renombrar los archivos de las vistas por el nombre correcto de cada clase
 */
export default class Cl_main {
  constructor() {
    this.app = {};
    this.app.mPrestamo = new Cl_mPrestamo();
    this.app.vEstudiante = new Cl_vEstudiante(this.app);
    this.app.vComerciante = new Cl_vComerciante(this.app);
    this.app.vPrestamo = new Cl_vPrestamo(this.app);
  }
}
