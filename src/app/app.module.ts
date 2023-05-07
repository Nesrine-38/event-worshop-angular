
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/shared/header/header.component';
import { FooterComponent } from './view/shared/footer/footer.component';
import { LoginComponent } from './view/authentification/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { RegisterComponent } from './view/authentification/register/register.component';
import { ErrorPageComponent } from './view/error-page/error-page.component';
import { AuthentificationComponent } from './view/authentification/authentification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlleventsComponent } from './view/allevents/allevents.component';
import { CreateEventComponent } from './view/create-event/create-event.component';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { SessionHandlerInterceptor } from './service/interceptors/session-handler.interceptor';
import { EventDetailComponent } from './view/event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ErrorPageComponent,
    AuthentificationComponent,
    AlleventsComponent,
    CreateEventComponent,
    EventDetailComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatListModule,
    MatDialogModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:SessionHandlerInterceptor,multi:true}],
  bootstrap: [AppComponent]
})

export class AppModule { }
