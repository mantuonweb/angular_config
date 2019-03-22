import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,APP_INITIALIZER } from '@angular/core';
import { HttpClientModule,HttpClient} from '@angular/common/http';


import { LoadConfiguration } from './core/load-configuration';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationService } from './core/configuration.service';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { TextareaExpandedComponent } from './textarea-expended/textarea-expended.component';

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
    AppComponent,
    CustomFormComponent,
    TextareaExpandedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [APP_INIT],
  bootstrap: [AppComponent]
})
export class AppModule { }
