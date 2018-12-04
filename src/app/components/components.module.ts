import { NgModule } from '@angular/core';
import { DolarComponent } from './dolar/dolar.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MomentModule } from 'angular2-moment';



@NgModule({
    declarations: [
        DolarComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        MomentModule
    ],
    exports: [
        DolarComponent,
        BrowserModule,
        MomentModule
    ],
    providers: [],
})
export class ComponentsModule {}
