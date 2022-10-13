import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesquantityComponent } from './salesquantity.component';

describe('SalesquantityComponent', () => {
  let component: SalesquantityComponent;
  let fixture: ComponentFixture<SalesquantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesquantityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
