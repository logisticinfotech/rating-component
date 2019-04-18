import { Component, OnInit } from '@angular/core';

declare var window;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ratingValueTwo = '1.6';

  constructor() { }

  ngOnInit() {
    // This code is use for getting svg from fontAwesome icon name
    console.log(window);

    const smileBeam = window.FontAwesome.icon({
      prefix: 'fas',
      iconName: 'smile-beam'
    }).html[0];
    const liRating = document.getElementById('liRatingFontAwesome');

    liRating.componentOnReady().then(() => {
      liRating.setSvgString(smileBeam);
    });
  }

  onChangeRating(event) {
    this.ratingValueTwo = event.target.value;
  }

}
