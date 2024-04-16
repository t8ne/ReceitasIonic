import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Historia2PageRoutingModule } from './historia2-routing.module';

import { Historia2Page } from './historia2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Historia2PageRoutingModule
  ],
  declarations: [Historia2Page]
})
export class Historia2PageModule {}
