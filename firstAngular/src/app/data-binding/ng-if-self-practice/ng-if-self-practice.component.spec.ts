import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfSelfPracticeComponent } from './ng-if-self-practice.component';

describe('NgIfSelfPracticeComponent', () => {
  let component: NgIfSelfPracticeComponent;
  let fixture: ComponentFixture<NgIfSelfPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfSelfPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfSelfPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
