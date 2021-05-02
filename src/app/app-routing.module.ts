import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { ForgotPasswordComponent} from './forgot-password/forgot-password.component';

const routes: Routes = [{
  path:'',
  redirectTo:'/events',
  pathMatch:'full'
},
{
  path:'events',
  component:EventsComponent
},
{
  path:'special',
  component:SpecialEventsComponent,
  canActivate:[AuthGuard]
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'registration',
  component:RegistrationComponent
},
{
   path: 'forgotPassword',
   component: ForgotPasswordComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
