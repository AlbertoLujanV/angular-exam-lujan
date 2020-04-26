import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';
import { CourseComponent } from './pages/course/course.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: '', component: CourseComponent },
      { path: 'course-detail/:id', component: CourseDetailComponent }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
