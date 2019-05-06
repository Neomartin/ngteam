
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Modulos
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';


// Rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './services/service.module';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ],
  imports: [
    PagesModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [ ServiceModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
