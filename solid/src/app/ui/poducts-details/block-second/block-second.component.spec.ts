import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSecondComponent } from './block-second.component';

describe('BlockSecondComponent', () => {
  let component: BlockSecondComponent;
  let fixture: ComponentFixture<BlockSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
