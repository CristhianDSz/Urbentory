import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs'
import { Dependency} from 'src/app/models/dependency';
import { ManagementService } from './management.service';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

  readonly URL = 'http://localhost:3000/urbentory/dependency'
  private managamentService: ManagementService

  selectedDependency: Dependency

  constructor(private http: HttpClient) { 
    this.managamentService = new ManagementService(this.http)
    this.selectedDependency = new Dependency()

  }

  public postDependency(dependency: Dependency) {
    return this.http.post(this.URL,dependency)
  }

  public putDependency(dependency: Dependency){
    return this.http.put(this.URL +`/${dependency.getIdDependency}`,dependency)
  }

  public deleteDependency(idDependency: number){
    return this.http.delete(this.URL+`${idDependency}`)
  }

  public getDependencies():Observable<Dependency[]> {
    return this.http.get<Dependency[]>(this.URL)
  }

  public getManagements() {
    return this.managamentService.getMananagements()
  }
}
