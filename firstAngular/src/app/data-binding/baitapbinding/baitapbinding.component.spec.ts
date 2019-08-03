import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapbindingComponent } from './baitapbinding.component';

describe('BaitapbindingComponent', () => {
  let component: BaitapbindingComponent;
  let fixture: ComponentFixture<BaitapbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
