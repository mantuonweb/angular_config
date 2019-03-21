import { Component } from '@angular/core';
import { ConfigurationService } from './core/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'democonfig';
  // https://davembush.github.io/where-to-store-angular-configurations/
  settings:any={};
  constructor(public config:ConfigurationService){
    this.settings = config.settings;
  }
}
