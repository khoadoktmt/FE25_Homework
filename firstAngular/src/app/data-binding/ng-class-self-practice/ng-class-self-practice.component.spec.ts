import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassSelfPracticeComponent } from './ng-class-self-practice.component';

describe('NgClassSelfPracticeComponent', () => {
  let component: NgClassSelfPracticeComponent;
  let fixture: ComponentFixture<NgClassSelfPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassSelfPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassSelfPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
