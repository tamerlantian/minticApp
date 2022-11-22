import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Llaves } from '../config/llaves';
import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
const generador = require('password-generator');
const cryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository
  ) {}

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

  //Método para autenticación de usuarios, verifica que el usuario y la contraseña sean los mismos

  IdentificarUsuario(usuario: string, clave: string){
    try {
      let u = this.usuarioRepository.findOne({where: {correo: usuario, contrasena: clave}});
      if(u){
        return u;
      }
      return false;
    } catch {
      return false;
    }
  }

  //Método para generar token para encriptar datos en la autenticación
  GenerarTokenJWT(usuario: Usuario){
    let token = jwt.sign({
      data: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre
      } 

    },
    Llaves.claveJWT);
    return token;
  }

  //Método para la validación del token generado para la sesión del usuario
  ValidarTokenJWT(token: string){
    try {
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    } catch {
      return false;
    }
  }

}
