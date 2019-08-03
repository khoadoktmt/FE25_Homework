import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBakeComponent } from './my-bake.component';

describe('MyBakeComponent', () => {
  let component: MyBakeComponent;
  let fixture: ComponentFixture<MyBakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
