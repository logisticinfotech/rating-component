import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {

  myRateValue = '4';
  reactiveForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.reactiveForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      mobile_number: ['', [Validators.required]],
      rate: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.reactiveForm.valueChanges.subscribe(val => {
      console.log(this.reactiveForm.value);
    });
  }

  onClickSubmit() {
    console.log('onClickSubmit', this.reactiveForm.value);
  }

  resetForm() {
    this.reactiveForm.reset();
  }

}
