import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserRegistrationService } from '../user-registration.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  
  public user: User = new User("","",0,"");
  public message: any;
  constructor(private userService: UserRegistrationService){

  }
  ngOnInit() {
    
  }
  public registerNow(){
    let resp = this.userService.doRegistration(this.user);
    resp.subscribe((data)=>{
      alert(data);
      this.message=data;
    })
  }

}
