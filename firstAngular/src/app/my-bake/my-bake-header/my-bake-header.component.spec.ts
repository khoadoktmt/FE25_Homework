import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBakeHeaderComponent } from './my-bake-header.component';

describe('MyBakeHeaderComponent', () => {
  let component: MyBakeHeaderComponent;
  let fixture: ComponentFixture<MyBakeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBakeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBakeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
