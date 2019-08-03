import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2ItemcardComponent } from './baitap2-itemcard.component';

describe('Baitap2ItemcardComponent', () => {
  let component: Baitap2ItemcardComponent;
  let fixture: ComponentFixture<Baitap2ItemcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2ItemcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2ItemcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
