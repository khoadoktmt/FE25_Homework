import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductionComponent } from './sub-production.component';

describe('SubProductionComponent', () => {
  let component: SubProductionComponent;
  let fixture: ComponentFixture<SubProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
