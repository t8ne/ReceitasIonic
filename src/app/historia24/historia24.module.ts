import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Historia24PageRoutingModule } from './historia24-routing.module';

import { Historia24Page } from './historia24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Historia24PageRoutingModule
  ],
  declarations: [Historia24Page]
})
export class Historia24PageModule {}
