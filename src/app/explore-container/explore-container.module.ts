import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng5SliderModule } from 'ng5-slider';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { BrowserModule } from '@angular/platform-browser'
import { ExploreContainerComponent } from './explore-container.component';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Options } from 'ng5-slider';
import { AMDModule } from '../amd.module';

@NgModule({
  imports: [ CommonModule, FormsModule,
     BrowserModule,
    IonicModule,
    AMDModule
  ],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {

   
  

  constructor(private _formBuilder: FormBuilder) {}

   



}
