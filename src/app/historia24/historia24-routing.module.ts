import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Historia24Page } from './historia24.page';

const routes: Routes = [
  {
    path: '',
    component: Historia24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Historia24PageRoutingModule {}
