import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturaRegistroComponent } from './comite/asignatura/asignatura-registro/asignatura-registro.component';
import { AsignaturaConsultaComponent } from './comite/asignatura/asignatura-consulta/asignatura-consulta.component';

import { Routes, RouterModule } from '@angular/router';
import { DocenteRegistroComponent } from './comite/docente/docente-registro/docente-registro.component';
import { DocenteConsultaComponent } from './comite/docente/docente-consulta/docente-consulta.component';
import { AsignaturaEdicionComponent } from './comite/asignatura/asignatura-edicion/asignatura-edicion.component';


const routes: Routes = [

    {
    path: 'asignaturaConsulta',
    component:AsignaturaConsultaComponent
    },
    {
      path: 'asignaturaRegistro',
      component: AsignaturaRegistroComponent
    },
    {
      path: 'asignaturaEdicion/:identificacion',
      component: AsignaturaEdicionComponent
    },
   
    {
        path: 'docenteRegistro',
        component: DocenteRegistroComponent
    },
    {
          path: 'docenteConsulta',
          component: DocenteConsultaComponent
    }
    
];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
