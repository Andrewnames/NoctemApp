import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//custom imports
import { Ng5SliderModule } from 'ng5-slider';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ExploreContainerComponent } from './explore-container/explore-container.component';

@NgModule({
  declarations: [AppComponent,ExploreContainerComponent],
  entryComponents: [],
  imports: [ IonicModule.forRoot(), AppRoutingModule, 
    BrowserAnimationsModule,
    BrowserModule,
    MatSliderModule,
    MatFormFieldModule,
    Ng5SliderModule,
    MatButtonModule,
    MatChipsModule,
    MatStepperModule, 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
