import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './core/public/public.component';


const routes: Routes = [
  {
    path: '',
    component: PublicComponent
  },
  {
    path: 'courses',
    loadChildren: () => import('./modules/private.module').then(m => m.PrivateModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
