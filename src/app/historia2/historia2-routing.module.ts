import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Historia2Page } from './historia2.page';

const routes: Routes = [
  {
    path: '',
    component: Historia2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Historia2PageRoutingModule {}
