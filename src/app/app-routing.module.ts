import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'ds', loadChildren: './ds/ds.module#DsPageModule' },
  { path: 'adm', loadChildren: './adm/adm.module#AdmPageModule' },
  { path: 'rh', loadChildren: './rh/rh.module#RhPageModule' },
  { path: 'log', loadChildren: './log/log.module#LogPageModule' },
  { path: 'mark', loadChildren: './mark/mark.module#MarkPageModule' },
  { path: 'vest', loadChildren: './vest/vest.module#VestPageModule' },
  { path: 'sj', loadChildren: './sj/sj.module#SjPageModule' },
  { path: 'cont', loadChildren: './cont/cont.module#ContPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
