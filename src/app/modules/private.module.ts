import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { CourseComponent } from './pages/course/course.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { ServicesModule } from './services/services.module';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../shared/components/components.module';
import { PrivateRoutingModule } from './private-routing.module';


@NgModule({
  declarations: [
    PrivateComponent,
    CourseComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ServicesModule,
    RouterModule,
    SharedComponentsModule,
    

  ]
})
export class PrivateModule { }
