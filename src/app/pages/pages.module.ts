import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        NotfoundComponent
    ],
    imports: [
        SharedModule,
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
