import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './inicio/inicio.module#InicioPageModule'},
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  // { path: 'temas', loadChildren: './temas/temas.module#TemasPageModule' },
  // { path: 'unidad', loadChildren: './unidad/unidad.module#UnidadPageModule' },
  // { path: 'contenido', loadChildren: './contenido/contenido.module#ContenidoPageModule' },
  { path: '', loadChildren: './hamburguesa/hamburguesa.module#HamburguesaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
