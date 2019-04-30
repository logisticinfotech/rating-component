import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var window;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @ViewChild('liRatingFontAwesome') liRating: ElementRef;

  ratingValueTwo = '1.6';

  constructor() { }

  ngOnInit() {
    // This code is use for getting svg from fontAwesome icon name
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
