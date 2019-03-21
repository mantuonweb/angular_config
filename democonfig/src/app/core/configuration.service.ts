import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  settings: any = {

  }

  environment: any = {};
  constructor() {
    this.environment = environment;
  }
}
