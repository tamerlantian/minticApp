import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearusuarioComponent } from './crearusuario/crearusuario.component';
import { EditarrusuarioComponent } from './editarrusuario/editarrusuario.component';
import { EliminarusuarioComponent } from './eliminarusuario/eliminarusuario.component';
import { EditarusuarioComponent } from './editarusuario/editarusuario.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    CrearusuarioComponent,
    EditarrusuarioComponent,
    EliminarusuarioComponent,
    EditarusuarioComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
