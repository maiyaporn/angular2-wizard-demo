import { Component, OnInit, Input, Output, EventEmitter, Host, Inject, forwardRef } from '@angular/core';
import { WizardComponent } from './../wizard/wizard.component';

@Component({
  selector: 'wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent implements OnInit {
  @Input() title: string;
  // @Input() isActive: boolean = false;
  private _isActive: boolean = false;
  isDisabled: boolean = true;

  @Output() onNext: EventEmitter<any> = new EventEmitter();
  @Output() onPrev: EventEmitter<any> = new EventEmitter();
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  @Input('isActive') set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }


}
