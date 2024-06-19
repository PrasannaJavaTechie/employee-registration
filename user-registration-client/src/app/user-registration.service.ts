import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  public doRegistration(user: User){
    return this.http.post("http://localhost:9090/registerapi/register",user,{responseType:"text"});
  }

  public getUsers(){
    return this.http.get("http://localhost:9090/registerapi/getAllUsers");
  }

  public getUserByEmail(email: string){
    return this.http.get("http://localhost:9090/registerapi/findUser/"+email);
  }

  public deleteUser(id:any){
    return this.http.delete("http://localhost:9090/registerapi/cancel/"+id);
  }

}
