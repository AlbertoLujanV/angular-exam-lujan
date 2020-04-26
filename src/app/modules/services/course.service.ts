import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Course, Detail } from '../interfaces/course.interface';
import { CourseReleaseResponse } from '../interfaces/course-release-response.interface';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn:  ServicesModule
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    return this.http.get<Course[]>('https://ionicapp-7a398.firebaseio.com/galaxydemy/subjects.json');
      
    
  }

  getArtist(id: string): Observable<Detail> {
    return this.http.get<Detail>(`artists/${id}`);
  }

  
  
}
