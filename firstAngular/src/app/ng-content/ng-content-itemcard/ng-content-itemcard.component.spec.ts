import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentItemcardComponent } from './ng-content-itemcard.component';

describe('NgContentItemcardComponent', () => {
  let component: NgContentItemcardComponent;
  let fixture: ComponentFixture<NgContentItemcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentItemcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentItemcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
