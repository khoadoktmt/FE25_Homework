import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhone04Component } from './smart-phone04.component';

describe('SmartPhone04Component', () => {
  let component: SmartPhone04Component;
  let fixture: ComponentFixture<SmartPhone04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPhone04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhone04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
