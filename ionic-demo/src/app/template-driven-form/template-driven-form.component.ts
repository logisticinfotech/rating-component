import { Component, OnInit } from '@angular/core';

export class MyTemplateDriverForm {
  public name: string;
  public mobile_number: string;
  public rate: string;
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {

  myTemplateDriverForm: MyTemplateDriverForm;

  constructor() {
    this.myTemplateDriverForm = new MyTemplateDriverForm();
  }

  ngOnInit() { }

  onClickSubmit() {
    console.log('onClickSubmit', this.myTemplateDriverForm);
  }

  resetForm() {
    this.myTemplateDriverForm = new MyTemplateDriverForm();
  }

}
