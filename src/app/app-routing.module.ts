import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './crud/listar/listar.component';
import { RegistrarComponent } from './crud/registrar/registrar.component';

const routes: Routes = [
  {path: '', component: ListarComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'registrar/:id', component: RegistrarComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
