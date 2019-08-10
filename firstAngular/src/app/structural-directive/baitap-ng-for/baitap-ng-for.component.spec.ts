import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapNgForComponent } from './baitap-ng-for.component';

describe('BaitapNgForComponent', () => {
  let component: BaitapNgForComponent;
  let fixture: ComponentFixture<BaitapNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
