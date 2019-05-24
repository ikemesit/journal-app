import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'jr-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  @ViewChild('search')
  searchInput: ElementRef;

  @ViewChild('searchWrapper')
  searchWrapper: ElementRef;

  @ViewChild('placeholder')
  placeholder: ElementRef;

  searchInputVisible = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  showSearchInput(): void {
    this.searchInputVisible = true;
    this.renderer.setStyle(this.searchInput.nativeElement, 'width', '350px');
    this.renderer.setStyle(this.searchWrapper.nativeElement, 'width', '380px');
    this.searchInput.nativeElement.focus();
  }

  hideSearchInput(): void {
    this.searchInputVisible = false;
    this.renderer.setStyle(this.searchInput.nativeElement, 'width', '180px');
    this.renderer.setStyle(this.searchWrapper.nativeElement, 'width', '200px');
  }
}
