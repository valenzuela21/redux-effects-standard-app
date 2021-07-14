import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${(this._url)}/users?per_page=12&delay=8`)
          .pipe(map((resp:Object) => {
            // @ts-ignore
            return resp['data'];
          }))
  }

  getUserById(id: string){
    return this.http.get(`${(this._url)}/users/${id}`)
      .pipe(map((resp:Object) => {
        // @ts-ignore
        return resp['data'];
      }))
  }

}
