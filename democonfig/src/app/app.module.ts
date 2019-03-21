import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,APP_INITIALIZER } from '@angular/core';
import { HttpClientModule,HttpClient} from '@angular/common/http';


import { LoadConfiguration } from './core/load-configuration';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationService } from './core/configuration.service';


const APP_INIT = {
  provide: APP_INITIALIZER,
  useFactory: LoadConfiguration,
  deps: [
    HttpClient,
    ConfigurationService
  ],
  multi: true
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [APP_INIT],
  bootstrap: [AppComponent]
})
export class AppModule { }
