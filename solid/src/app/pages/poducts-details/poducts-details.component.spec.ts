import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductsDetailsComponent } from './poducts-details.component';

describe('PoductsDetailsComponent', () => {
  let component: PoductsDetailsComponent;
  let fixture: ComponentFixture<PoductsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoductsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
