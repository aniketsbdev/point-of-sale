import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleWindowComponent } from './sale-window.component';

describe('SaleWindowComponent', () => {
  let component: SaleWindowComponent;
  let fixture: ComponentFixture<SaleWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
