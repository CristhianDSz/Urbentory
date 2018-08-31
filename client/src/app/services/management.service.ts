import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Management } from '../models/management';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})

export class ManagementService {

  readonly URL = 'http://localhost:3000/urbentory/management'
  selectedManagement: Management;

  constructor(private http: HttpClient) {
    this.selectedManagement = new Management()
   }

  public getMananagements(): Observable<Management[]> {
    return this.http.get<Management[]>(this.URL);
  }

  public postManagement(management: Management) {
    return this.http.post(this.URL,management)
  }

  public putManagement(management: Management) {
    return this.http.put(this.URL + `/${management.getIdManagement}`, management)
  }

  public deleteManagement(idManagement: number) {
    return this.http.delete(this.URL + `/${idManagement}`)
  }
}
