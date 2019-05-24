import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'jr-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss'],
})
export class PublicationCardComponent implements OnChanges, OnInit {
  @Input()
  publicationTitle: string;

  @Input()
  cardHeight: string;

  @Input()
  publicationSubtitle: string;

  @Input()
  tags: string[];

  @Input()
  cardBackgroundImg: string;

  @Input()
  tagClass: string;

  backgroundStyles: {};

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable:no-string-literal
    const currImage = changes['cardBackgroundImg'];
    console.log(currImage);
    this.setBGstyles(currImage.currentValue);
  }

  setBGstyles(imageUrl: string): void {
    this.backgroundStyles = {
      'background-image': true
        ? `linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${imageUrl})`
        : '',
      'background-size': true ? 'cover' : '',
      'background-position': true ? 'center' : '',
      'background-repeat': true ? 'no-repeat' : '',
    };
  }
}
