
import { Component, OnInit } from '@angular/core';

import '@logisticinfotech/rating-component';

declare const window: any;

@Component({
  selector: 'app-custome-rating-meter',
  templateUrl: './custome-rating-meter.component.html',
  styleUrls: ['./custome-rating-meter.component.scss']
})
export class CustomeRatingMeterComponent implements OnInit {

  @ViewChild('myRatingElement') myRatingElement: ElementRef;

  value = 0;
  textIcon = '♥';
  fontSize = 70;
  color = '#FFA224';
  totalIcons = 5;
  fillMode = 'precise';
  opacity = 0.3;
  strokeColor = '#FF66E5';
  strokeWidth = 1;
  svgIconPath = '';

  exampleElement = '';

  isTextIcon = true;
  isOtherTextIcon = false;
  isSvgFilePath = false;
  isFontAwesomeIconName = false;
  placeHolderForIcon;
  fwPrefix;
  fwIconName = '';

  svgPath = '';

  constructor() { }

  ngOnInit() {
    this.changeExampleString();
  }

  onChageRating(event) {
    // console.log('onChageRating method calls : ' + event.target.value);
    this.value = event.target.value;
  }

  onChangeValue(elementID) {
    const ele = document.getElementById(elementID) as HTMLInputElement;
    const newValue = parseInt(ele.value, 10);
    // console.log('onChangeValue method calls : ' + this.totalIcons);
    if (elementID === 'totalIconRange') {
      this.totalIcons = newValue;

    } else if (elementID === 'valueRange') {
      this.value = Number(ele.value);

    } else if (elementID === 'fontSizeRange') {
      this.fontSize = newValue;

    } else if (elementID === 'opacityRange') {
      this.opacity = Number(ele.value);

    } else if (elementID === 'strokeWidthRange') {
      this.strokeWidth = newValue;

    }
    this.changeExampleString();
  }

  onChangeIcon(event) {
    // console.log('onChangeIcon method calls : ', event.target.value);
    if (event.target.value === 'textIcon') {
      this.textIcon = '★';
      this.isTextIcon = true;
      this.isSvgFilePath = false;
      this.isFontAwesomeIconName = false;
    } else if (event.target.value === 'svgPath') {
      this.placeHolderForIcon = 'Please enter SVG icon path here';
      this.isTextIcon = false;
      this.isSvgFilePath = true;
      this.isFontAwesomeIconName = false;
    } else if (event.target.value === 'fontAwesomeIcon') {
      this.placeHolderForIcon = 'Please font-awesome icon name';
      this.isTextIcon = false;
      this.isSvgFilePath = false;
      this.isFontAwesomeIconName = true;
    }
    this.changeExampleString();
  }

  onChangeTextIcon(event) {
    // console.log('onChangeTextIcon method calls : ', event.target.value);
    this.isOtherTextIcon = event.target.value === '' ? true : false;
    this.textIcon = event.target.value;
    this.changeExampleString();
    this.svgIconPath = '';
  }

  onChangeText(event) {
    // console.log('onChangeText method calls : ', (event.target.value).substr(0, 1));
    this.textIcon = (<HTMLInputElement>event.target).value.substr(0, 1);
    this.changeExampleString();
    this.svgIconPath = '';
  }

  async onClickSetSVG() {
    // console.log('onClickSetSVG method calls =>', event.target.value);
    if (this.isSvgFilePath) {
      this.textIcon = '';

      this.svgPath = this.fwIconName;
      this.svgIconPath = this.fwIconName;

    } else if (this.isFontAwesomeIconName) {
      const fwIconSvg = window.FontAwesome.icon({
        prefix: this.fwPrefix,
        iconName: this.fwIconName
      }).html[0];


      this.textIcon = '';
      this.svgIconPath = '';

      await this.myRatingElement.nativeElement.setSvgString(fwIconSvg);

      // const liRating = document.getElementById('liRating');
      // liRating.componentOnReady().then(() => {
      //   liRating.setSvgString(fwIconSvg);
      // });
    }
    this.fwIconName = '';
    this.fwPrefix = '';
    this.changeExampleString();
  }

  onChangeFillMode(event) {
    // console.log('onChangeFillMode method calls : ', event.target.value);
    this.fillMode = event.target.value;
    this.changeExampleString();
  }

  onChangeColor(event) {
    // console.log('onChangeColor method calls : ', event.target.value);
    this.color = event.target.value;
    this.changeExampleString();
  }

  onChangeStrokeColor(event) {
    // console.log('onChangeStrokeColor method calls : ', event.target.value);
    this.strokeColor = event.target.value;
    this.changeExampleString();
  }

  changeExampleString() {
    // console.log('changeExampleString method calls');
    const one = '<li-rating ngDefaultControl [(ngModel)]="ratingValue" value="'
      + this.value + '" fontSize="' + this.fontSize + '" color="' + this.color + '" ';
    const two = 'totalIcons="' + this.totalIcons + '" fillMode="' + this.fillMode + '" ';
    const three = 'opacity="' + this.opacity + '" strokeColor="' + this.strokeColor + '" strokeWidth="' + this.strokeWidth + '"';
    const four = '></li-rating>';
    const textIcon = ' textIcon="' + this.textIcon + '" ';
    const svgIconPath = ' svgIconPath="' + this.svgPath + '" ';

    if (this.isTextIcon) {
      this.exampleElement = one + two + textIcon + three + four;
    } else if (this.isSvgFilePath) {
      this.exampleElement = one + two + svgIconPath + three + four;
    } else {
      this.exampleElement = one + two + three + four;
    }
  }

}
