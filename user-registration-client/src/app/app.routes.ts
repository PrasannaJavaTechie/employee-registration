import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
{path:"",redirectTo:"home",pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"register",component:RegistrationComponent},
{path:"search",component:SearchDeleteComponent}
];
