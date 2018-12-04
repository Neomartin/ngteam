import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Settings = {
    theme: 'blue',
    themeUrl: 'assets/css/colors/blue.css'
  };

  constructor() {
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }
  loadSettings() {
    if (localStorage.getItem('settings')) {
      console.log('entra');
      const localSettings = JSON.parse(localStorage.getItem('settings'));
      this.settings = localSettings;
      this.implementTheme(this.settings.theme);
    } else {
      localStorage.setItem('settings', JSON.stringify(this.settings));
      this.implementTheme(this.settings.theme);
    }
  }
  implementTheme(theme: string) {
    const url = `assets/css/colors/${ theme }.css`;
    this.settings.themeUrl = url;
    this.settings.theme = theme;
    document.getElementById('theme').setAttribute('href', url);
    this.saveSettings();
  }
}

interface Settings {
  theme: string;
  themeUrl: string;
}
