
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        BreadcumbsComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        ThemeComponent
    ],
    exports: [
        BreadcumbsComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        ThemeComponent
    ],
    providers: [],
})
export class SharedModule {}
