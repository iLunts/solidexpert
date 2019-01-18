import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDetailsPageComponent } from './cv-details-page.component';

describe('CvDetailsPageComponent', () => {
  let component: CvDetailsPageComponent;
  let fixture: ComponentFixture<CvDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
