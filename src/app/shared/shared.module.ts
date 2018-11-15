
import { NgModule } from '@angular/core';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        BreadcumbsComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],
    exports: [
        BreadcumbsComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent],
    providers: [],
})
export class SharedModule {}
