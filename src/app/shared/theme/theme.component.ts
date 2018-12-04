import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private _document,
    private _settings: SettingsService
  ) { }

  ngOnInit() {
  }
  changeColor(theme: string, link: any) {
    this.applyCheck(link);
    this._settings.implementTheme(theme);
  }

  applyCheck( link: any ) {
    const selectores: any = document.getElementsByClassName('theme-picker');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}

