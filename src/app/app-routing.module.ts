import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './view/error-page/error-page.component';
import { HomeComponent } from './view/home/home.component';
import { RegisterComponent } from './view/authentification/register/register.component';
import { AuthentificationComponent } from './view/authentification/authentification.component';
import { UserAuthGuard } from './guard/user-auth.guard';
import { CreateEventComponent } from './view/create-event/create-event.component';
import { EventDetailComponent } from './view/event-detail/event-detail.component';

const routes: Routes = [
  
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'auth', component:AuthentificationComponent,canActivate:[UserAuthGuard]},
  {path: 'event/create',component:CreateEventComponent,canActivate:[UserAuthGuard]},
  {path: 'event/detail/:id',component:EventDetailComponent,canActivate:[UserAuthGuard]},
  {path: 'home',component:HomeComponent,canActivate:[UserAuthGuard]},
  {path: '**',component:ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
