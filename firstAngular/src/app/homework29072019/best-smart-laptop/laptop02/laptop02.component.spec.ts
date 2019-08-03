import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Laptop02Component } from './laptop02.component';

describe('Laptop02Component', () => {
  let component: Laptop02Component;
  let fixture: ComponentFixture<Laptop02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Laptop02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Laptop02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
