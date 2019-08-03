import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Production02Component } from './production02.component';

describe('Production02Component', () => {
  let component: Production02Component;
  let fixture: ComponentFixture<Production02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Production02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Production02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
