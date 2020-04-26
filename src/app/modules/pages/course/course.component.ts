import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[] = [];
  cour: Observable<any>;
  constructor(
    private course: CourseService,
    private router: Router,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {

    this.course.getNewReleases().subscribe((data: any[])=>{
      console.log(data);
      this.courses = data;
    }) 
    //this.cour = this.httpClient.get('https://ionicapp-7a398.firebaseio.com/galaxydemy/subjects.json');
  }


  
}
