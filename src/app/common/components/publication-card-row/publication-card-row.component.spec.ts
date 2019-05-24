import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationCardRowComponent } from './publication-card-row.component';

describe('PublicationCardRowComponent', () => {
  let component: PublicationCardRowComponent;
  let fixture: ComponentFixture<PublicationCardRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationCardRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
