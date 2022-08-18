import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DocumentInterface} from './interfaces/document.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(private client: HttpClient) {

  }

  saveForm(form: DocumentInterface): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
      })
    };

    return this.client.post('https://data.mongodb-api.com/app/data-iuxlq/endpoint/addOne', form, httpOptions);
  }
}
