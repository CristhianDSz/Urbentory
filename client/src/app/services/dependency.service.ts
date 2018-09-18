import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs'
import { Dependency} from 'src/app/models/dependency';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

  readonly URL = 'http://localhost:3000/urbentory/dependency'

  constructor(private http: HttpClient) { 
    

  }

  public getDependencies():Observable<Dependency[]> {
    return this.http.get<Dependency[]>(this.URL)
  }
}
