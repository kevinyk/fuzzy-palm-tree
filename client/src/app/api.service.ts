import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }
  addNote(aNote){
  	return this._http.post('/api/notes', aNote).map(Response=>Response.json()).toPromise();
  }
  getNotes(){
  	return this._http.get('/api/notes').map(Response=>Response.json()).toPromise();
  }
}
