import { Component, OnInit } from '@angular/core';

declare var window;

@Component({
  selector: 'app-custome-rating-meter',
  templateUrl: './custome-rating-meter.component.html',
  styleUrls: ['./custome-rating-meter.component.scss']
})
export class CustomeRatingMeterComponent implements OnInit {

  value = 0;
  textIcon = '★';
  fontSize = 50;
  color = '#FF99FF';
  totalIcons = 5;
  fillMode = 'precise';
  opacity = 0.3;
  strokeColor = '#FF66E5';
  strokeWidth = 1;
  svgIconPath = '';

  exampleElement = '';

  isTextIcon = true;
  isSvgFilePath = false;
  isFontAwesomeIconName = false;
  placeHolderForIcon;
  fwPrefix;
  fwIconName;

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
    const newValue = document.getElementById(elementID).value;
    // console.log('onChangeValue method calls : ' + this.totalIcons);
    if (elementID === 'totalIconRange') {
      this.totalIcons = newValue;
    } else if (elementID === 'valueRange') {
      this.value = newValue;
    } else if (elementID === 'fontSizeRange') {
      this.fontSize = newValue;
    } else if (elementID === 'opacityRange') {
      this.opacity = newValue;
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
    this.textIcon = event.target.value;
    this.changeExampleString();
  }

  onClickSetSVG() {
    // console.log('onClickSetSVG method calls =>', event.target.value);
    if (this.isSvgFilePath) {
      this.svgPath = this.fwIconName;
      this.svgIconPath = this.fwIconName;
    } else if (this.isFontAwesomeIconName) {
      const fwIconSvg = window.FontAwesome.icon({
        prefix: this.fwPrefix,
        iconName: this.fwIconName
      }).html[0];
      const liRating = document.getElementById('liRating');
      liRating.componentOnReady().then(() => {
        liRating.setSvgString(fwIconSvg);
      });
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
    const one = '<li-rating ngDefaultControl [(ngModel)]="ratingValue" value="' + this.value + '" fontSize="' + this.fontSize + '" ';
    const two = 'color="' + this.color + '" totalIcons="' + this.totalIcons + '" fillMode="' + this.fillMode + '" ';
    const three = 'opacity="' + this.opacity + '" strokeColor="' + this.strokeColor + '" strokeWidth="' + this.strokeWidth + '"';
    const four = '></li-rating>';
    const textIcon = ' textIcon="' + this.textIcon + '" ';
    const svgIconPath = ' svgIconPath="' + this.svgPath + '" ';

    if (this.isTextIcon) {
      this.exampleElement = one + textIcon + two + three + four;
    } else if (this.isSvgFilePath) {
      this.exampleElement = one + svgIconPath + two + three + four;
    } else {
      this.exampleElement = one + two + three + four;
    }
  }

  onChangeRating(event) {
    // console.log('onChangeRating method calls : ' ,event.target.value);
    this.ratingValueOne = event.target.value;
  }
}
