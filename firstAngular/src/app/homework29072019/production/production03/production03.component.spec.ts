import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Production03Component } from './production03.component';

describe('Production03Component', () => {
  let component: Production03Component;
  let fixture: ComponentFixture<Production03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Production03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Production03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
