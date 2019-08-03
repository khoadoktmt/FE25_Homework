import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSmartPhoneComponent } from './best-smart-phone.component';

describe('BestSmartPhoneComponent', () => {
  let component: BestSmartPhoneComponent;
  let fixture: ComponentFixture<BestSmartPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestSmartPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSmartPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
