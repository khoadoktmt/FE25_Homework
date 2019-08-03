import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Laptop01Component } from './laptop01.component';

describe('Laptop01Component', () => {
  let component: Laptop01Component;
  let fixture: ComponentFixture<Laptop01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Laptop01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Laptop01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
