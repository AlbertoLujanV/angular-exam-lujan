import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Detail } from '../../interfaces/course.interface';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  detail: Detail;
  constructor(private course: CourseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.course.getCourse(id).subscribe((data: any)=>{
      console.log(data);
      this.detail = data;
    }) 
  }

  backClicked() {
    this.router.navigateByUrl("courses");
  }

}
