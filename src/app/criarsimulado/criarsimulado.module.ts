import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarsimuladoPageRoutingModule } from './criarsimulado-routing.module';

import { CriarsimuladoPage } from './criarsimulado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarsimuladoPageRoutingModule
  ],
  declarations: [CriarsimuladoPage]
})
export class CriarsimuladoPageModule {}
