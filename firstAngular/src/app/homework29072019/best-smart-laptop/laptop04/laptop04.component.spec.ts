import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Laptop04Component } from './laptop04.component';

describe('Laptop04Component', () => {
  let component: Laptop04Component;
  let fixture: ComponentFixture<Laptop04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Laptop04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Laptop04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
