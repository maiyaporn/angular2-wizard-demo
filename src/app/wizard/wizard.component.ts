import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { WizardStepComponent } from './../wizard-step/wizard-step.component';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit, AfterContentInit {
  @ContentChildren(WizardStepComponent) wizardSteps: QueryList<WizardStepComponent>;
  private _steps: Array<WizardStepComponent> = [];
  private _isCompleted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.wizardSteps.forEach(step => this._steps.push(step));
    this._steps[0].isActive = true;
  }

  private get steps(): Array<WizardStepComponent> {
    return this._steps;
  }

  private get isCompleted(): boolean {
    return this._isCompleted;
  }

  private get activeStep(): WizardStepComponent {
    return this._steps.find(step => step.isActive);
  }

  private get activeStepIndex(): number {
    return this._steps.indexOf(this.activeStep);
  }

  private get hasNextStep(): boolean {
    return this.activeStepIndex < this._steps.length - 1;
  }

  private get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  next() {
    if (this.hasNextStep) {
      let nextStep: WizardStepComponent = this._steps[this.activeStepIndex + 1];
      this.activeStep.onNext.emit();
      this.activeStep.isActive = false;
      nextStep.isActive = true;
      // nextStep.disabled = false;
    }
  }

  previous() {
    if (this.hasPrevStep) {
      let prevStep: WizardStepComponent = this._steps[this.activeStepIndex - 1];
      this.activeStep.onPrev.emit();
      this.activeStep.isActive = false;
      prevStep.isActive = true;
    }
  }

  complete() {
    this._isCompleted = true;
    this.activeStep.onComplete.emit();
  }

}
