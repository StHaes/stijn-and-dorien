import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DocumentInterface} from './interfaces/mongoDb.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor(private client: HttpClient) {

  }

  saveForm(form: DocumentInterface): Observable<any> {
    const body = {
      collection: 'people',
      database: 'attendance',
      datasource: 'Cluster0',
      document: form
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'kW5DcnBJNRxtSPZYhmo24RAqC4nHZINfB7DawFmLSx0GkLdNfNEn6hwbQVXEEavT'
      })
    };

    return this.client.post('https://data.mongodb-api.com/app/data-iuxlq/endpoint/data/v1/action/insertOne', body, httpOptions);
  }
}
