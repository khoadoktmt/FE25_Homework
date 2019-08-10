import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchSelfPracticeComponent } from './ng-switch-self-practice.component';

describe('NgSwitchSelfPracticeComponent', () => {
  let component: NgSwitchSelfPracticeComponent;
  let fixture: ComponentFixture<NgSwitchSelfPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchSelfPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchSelfPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
