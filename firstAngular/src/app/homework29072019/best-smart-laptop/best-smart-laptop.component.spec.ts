import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSmartLaptopComponent } from './best-smart-laptop.component';

describe('BestSmartLaptopComponent', () => {
  let component: BestSmartLaptopComponent;
  let fixture: ComponentFixture<BestSmartLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestSmartLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSmartLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
