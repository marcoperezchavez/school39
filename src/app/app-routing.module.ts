import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './inicio/inicio.module#InicioPageModule'},
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  // { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  // { path: 'temas', loadChildren: './temas/temas.module#TemasPageModule' },
  // { path: 'unidad', loadChildren: './unidad/unidad.module#UnidadPageModule' },
  // { path: 'contenido', loadChildren: './contenido/contenido.module#ContenidoPageModule' },
  { path: '', loadChildren: './hamburguesa/hamburguesa.module#HamburguesaPageModule' },
  // { path: 'u5-t3', loadChildren: './u5-t3/u5-t3.module#U5T3PageModule' },
  // { path: 'u5-t4', loadChildren: './u5-t4/u5-t4.module#U5T4PageModule' }

  // { path: 'u4-t3', loadChildren: './u4-t3/u4-t3.module#U4T3PageModule' },
  // { path: 'u4-t4', loadChildren: './u4-t4/u4-t4.module#U4T4PageModule' }

  // { path: 'u3-t3', loadChildren: './u3-t3/u3-t3.module#U3T3PageModule' },
  // { path: 'u3-t4', loadChildren: './u3-t4/u3-t4.module#U3T4PageModule' }

  // { path: 'u2-t3', loadChildren: './u2-t3/u2-t3.module#U2T3PageModule' },
  // { path: 'u2-t4', loadChildren: './u2-t4/u2-t4.module#U2T4PageModule' }

  // { path: 'u1-t3', loadChildren: './u1-t3/u1-t3.module#U1T3PageModule' },
  // { path: 'u1-t4', loadChildren: './u1-t4/u1-t4.module#U1T4PageModule' },

  //{ path: 'u1-t1', loadChildren: './u1-t1/u1-t1.module#U1T1PageModule' },
  //{ path: 'u1-t2', loadChildren: './u1-t2/u1-t2.module#U1T2PageModule' },
  // { path: 'u2-t1', loadChildren: './u2-t1/u2-t1.module#U2T1PageModule' },
  // { path: 'u2-t2', loadChildren: './u2-t2/u2-t2.module#U2T2PageModule' },
  // { path: 'u3-t1', loadChildren: './u3-t1/u3-t1.module#U3T1PageModule' },
  // { path: 'u3-t2', loadChildren: './u3-t2/u3-t2.module#U3T2PageModule' },
  // { path: 'u4-t1', loadChildren: './u4-t1/u4-t1.module#U4T1PageModule' },
  // { path: 'u4-t2', loadChildren: './u4-t2/u4-t2.module#U4T2PageModule' },
  // { path: 'u5-t1', loadChildren: './u5-t1/u5-t1.module#U5T1PageModule' },
  // { path: 'u5-t2', loadChildren: './u5-t2/u5-t2.module#U5T2PageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
