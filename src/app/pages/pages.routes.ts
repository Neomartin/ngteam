import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { RegisterComponent } from '../login/register.component';
import { LoginComponent } from '../login/login.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent , data: { title: 'Dashboard'}},
            { path: 'rxjs', component: RxjsComponent, data: { title: 'Observables'} },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    },
    { path: 'register', component: RegisterComponent, data: { title: 'Register'}},
    { path: 'login', component: LoginComponent, data: { title: 'Login'}},
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
