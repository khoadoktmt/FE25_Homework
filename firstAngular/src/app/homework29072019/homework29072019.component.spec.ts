import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework29072019Component } from './homework29072019.component';

describe('Homework29072019Component', () => {
  let component: Homework29072019Component;
  let fixture: ComponentFixture<Homework29072019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homework29072019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework29072019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
