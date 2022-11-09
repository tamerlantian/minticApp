import {injectable, /* inject, */ BindingScope} from '@loopback/core';
const generador = require('password-generator');
const cryptoJS = require('crypto-js');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  /*Servicio de generación de clave*/

  GenerarClave(){
    let contrasena = generador(8, false);
    return contrasena;
  }

  /* Servicio para cifrar la clave */
  CifrarClave(contrasena:string){
    let claveCifrada = cryptoJS.MD5(contrasena).toString();
    return claveCifrada;
  }



}
