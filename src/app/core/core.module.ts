import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../shared/components/components.module';
import { HeaderComponent } from '../shared/components/header/header.component';


@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule
  ],
  exports: [
    PublicComponent
  ]
})
export class CoreModule { }
