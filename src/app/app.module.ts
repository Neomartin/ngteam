
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Modulos
import { PagesModule } from './pages/pages.module';

// Rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    PagesModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ ServiceModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
