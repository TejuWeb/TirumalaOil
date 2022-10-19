import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgstockquantityComponent } from './fgstockquantity.component';

describe('FgstockquantityComponent', () => {
  let component: FgstockquantityComponent;
  let fixture: ComponentFixture<FgstockquantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FgstockquantityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgstockquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
