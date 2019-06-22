import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var window;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @ViewChild('liRatingFontAwesome') liRating: ElementRef;

  ratingValueOne = 0;
  ratingValueTwo = '1.6';
  ratingValueThree = 0;
  ratingValueFour = 0;
  ratingValueFive = 0;
  ratingValueSix = 0;
  ratingValueSeven = 0;
  ratingValueEight = 0;
  ratingValueNine = 0;
  ratingValueTen = 0;

  constructor() { }

  ngOnInit() {
    this.setFontAwesomeIcon();
  }

  async setFontAwesomeIcon() {
    const smileBeam = window.FontAwesome.icon({
      prefix: 'fas',
      iconName: 'smile-beam'
    }).html[0];

    await this.liRating.nativeElement.componentOnReady().then(() => {
      this.liRating.nativeElement.setSvgString(smileBeam);
    });
  }

  onChangeRating(event) {
    this.ratingValueTwo = event.target.value;
  }
}
