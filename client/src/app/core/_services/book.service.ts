import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralConfig } from './general-config';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
    private general: GeneralConfig
  ) { }

  getBooks(queryParams:{limit?: string, page?: string, query?: string}){
    let queryString = this.general.queryParams(queryParams)
    if(queryString){
      return this.http.get < any > (`${env.BASE_URL}/book?${queryString}`);
    }
    return this.http.get < any > (`${env.BASE_URL}/books`);
  }

}
