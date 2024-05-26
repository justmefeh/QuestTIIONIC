import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarsimuladoPage } from './criarsimulado.page';

const routes: Routes = [
  {
    path: '',
    component: CriarsimuladoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarsimuladoPageRoutingModule {}
