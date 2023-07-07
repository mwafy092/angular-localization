import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'localization-app';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'Arabic' },
  ];
}
