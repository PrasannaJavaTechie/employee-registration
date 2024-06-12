import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-delete',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-delete.component.html',
  styleUrl: './search-delete.component.css'
})
export class SearchDeleteComponent implements OnInit{
  users:any;
  email!: string ;
  constructor(private userRegistrationservice: UserRegistrationService){

  }
  ngOnInit(): void {
    let resp = this.userRegistrationservice.getUsers();
    resp.subscribe((data)=>{
      this.users = data;
    })
  }
  public deleteUser(id: number){
    let resp = this.userRegistrationservice.deleteUser(id);
    resp.subscribe((data)=>{
      this.users = data;
    })
  }
  public findUserByEmailId(){
    let resp = this.userRegistrationservice.getUserByEmail(this.email);
    resp.subscribe((data)=>{
      this.users = data;
    })

  }


}
