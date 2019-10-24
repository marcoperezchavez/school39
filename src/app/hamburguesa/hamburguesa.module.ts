import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HamburguesaPage } from './hamburguesa.page';




const routes: Routes = [
  {
    path: 'menu',
    component: HamburguesaPage,
  children: [
    {
      path: 'inicio', loadChildren: '../inicio/inicio.module#InicioPageModule'
    }
    // ,
    // {
    //   path: 'temas', loadChildren: './temas/temas.module#TemasPageModule'
    // }
    ,
    {
      path: 'unidad', loadChildren: '../unidad/unidad.module#UnidadPageModule'
    }
    // ,
    // {
    //   path: 'contenido', loadChildren: './contenido/contenido.module#ContenidoPageModule' 
    // }
  ]
},
 {
    path: '',
   redirectTo: '/menu/inicio'
  //  loadChildren: '../login2/login2.module#Login2PageModule'
  }
];



 // { path: '', loadChildren: './inicio/inicio.module#InicioPageModule'},
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  // { path: 'temas', loadChildren: './temas/temas.module#TemasPageModule' },
  // { path: 'unidad', loadChildren: './unidad/unidad.module#UnidadPageModule' },
  // { path: 'contenido', loadChildren: './contenido/contenido.module#ContenidoPageModule' },

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HamburguesaPage]
})
export class HamburguesaPageModule {




}
