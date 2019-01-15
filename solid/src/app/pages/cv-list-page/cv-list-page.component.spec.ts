import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvListPageComponent } from './cv-list-page.component';

describe('CvListPageComponent', () => {
  let component: CvListPageComponent;
  let fixture: ComponentFixture<CvListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
