import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'details2',
    loadChildren: () => import('./details2/details2.module').then( m => m.Details2PageModule)
  },
  {
    path: 'details3',
    loadChildren: () => import('./details3/details3.module').then( m => m.Details3PageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: 'historia2',
    loadChildren: () => import('./historia2/historia2.module').then( m => m.Historia2PageModule)
  },
  {
    path: 'historia24',
    loadChildren: () => import('./historia24/historia24.module').then( m => m.Historia24PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
