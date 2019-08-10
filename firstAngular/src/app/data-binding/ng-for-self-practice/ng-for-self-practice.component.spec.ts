import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForSelfPracticeComponent } from './ng-for-self-practice.component';

describe('NgForSelfPracticeComponent', () => {
  let component: NgForSelfPracticeComponent;
  let fixture: ComponentFixture<NgForSelfPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForSelfPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForSelfPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
