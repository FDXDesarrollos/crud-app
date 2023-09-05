import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './crud/listar/listar.component';
import { FormularioComponent } from './crud/formulario/formulario.component';
import { DetalleComponent } from './crud/detalle/detalle.component';

const routes: Routes = [
  {path: '', component: ListarComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'formulario/:id', component: FormularioComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
