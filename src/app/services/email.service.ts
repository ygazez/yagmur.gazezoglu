import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private url = '';
  constructor(private http: HttpClient) {}

  SendEmail(input: any, response: any) {
    return this.http.post(this.url, input, response).pipe(
      map(
        (response: any) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          if (error) {
            return error;
          }
        }
      )
    );
  }
}
