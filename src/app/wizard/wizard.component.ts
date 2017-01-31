import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { WizardStepComponent } from './../wizard-step/wizard-step.component';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit, AfterContentInit {
  @ContentChildren(WizardStepComponent) wizardSteps: QueryList<WizardStepComponent>;
  private steps: Array<WizardStepComponent> = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.wizardSteps.forEach(step => this.steps.push(step));
    console.log(this.steps);
  }

  private get activeStep(): WizardStepComponent {
    return this.steps.find(step => step.isActive);
  }

  private get activeStepIndex(): number {
    return this.steps.indexOf(this.activeStep);
  }

  private get hasNextStep(): boolean {
    return this.activeStepIndex < this.steps.length - 1;
  }

  private get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  next() {
    if (this.hasNextStep) {
      let nextStep: WizardStepComponent = this.steps[this.activeStepIndex + 1];
      this.activeStep.onNext.emit();
      this.activeStep.isActive = false;
      nextStep.isActive = true;
      // nextStep.disabled = false;
    }
  }

  previous() {
    if (this.hasPrevStep) {
      let prevStep: WizardStepComponent = this.steps[this.activeStepIndex - 1];
      this.activeStep.onPrev.emit();
      this.activeStep.isActive = false;
      prevStep.isActive = true;
    }
  }

  complete() {
    this.activeStep.onComplete.emit();
  }

}
