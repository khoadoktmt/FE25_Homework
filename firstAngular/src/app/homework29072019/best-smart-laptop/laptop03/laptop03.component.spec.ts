import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Laptop03Component } from './laptop03.component';

describe('Laptop03Component', () => {
  let component: Laptop03Component;
  let fixture: ComponentFixture<Laptop03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Laptop03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Laptop03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
