import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { PAGES_ROUTES } from './pages.routes';
import { ComponentsModule } from '../components/components.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RegisterComponent } from '../login/register.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        NotfoundComponent,
        RxjsComponent,
        RegisterComponent
    ],
    imports: [
        FormsModule,
        SharedModule,
        ComponentsModule,
        PAGES_ROUTES
    ],
    exports: [
        RegisterComponent,
        PagesComponent,
        DashboardComponent,
        NotfoundComponent,
        FormsModule
    ],
    providers: [],
})
export class PagesModule {}
