import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Production01Component } from './production01.component';

describe('Production01Component', () => {
  let component: Production01Component;
  let fixture: ComponentFixture<Production01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Production01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Production01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
