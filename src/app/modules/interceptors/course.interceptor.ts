import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CourseInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const url = `${environment.api}${request.url}`

    const newRequest = request.clone({
      url
    })

    return next.handle(newRequest)
    .pipe(
      catchError(err => {
        console.log('intercept error', err)
        return throwError(err);
      })
    );
  }

}
