import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ SettingsService ]
})
export class AppComponent {
  title = 'Client';
  constructor(
    public _settings: SettingsService
  ) {}

}

