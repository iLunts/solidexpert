import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvGeneratorPageComponent } from './cv-generator-page.component';

describe('CvGeneratorPageComponent', () => {
  let component: CvGeneratorPageComponent;
  let fixture: ComponentFixture<CvGeneratorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvGeneratorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
