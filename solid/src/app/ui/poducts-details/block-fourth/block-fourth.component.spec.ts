import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFourthComponent } from './block-fourth.component';

describe('BlockFourthComponent', () => {
  let component: BlockFourthComponent;
  let fixture: ComponentFixture<BlockFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
