import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { PAGES_ROUTES } from './pages.routes';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        NotfoundComponent
    ],
    imports: [
        FormsModule,
        SharedModule,
        ComponentsModule,
        PAGES_ROUTES
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        NotfoundComponent
    ],
    providers: [],
})
export class PagesModule {}
