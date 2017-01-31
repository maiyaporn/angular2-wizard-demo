import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardStepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
