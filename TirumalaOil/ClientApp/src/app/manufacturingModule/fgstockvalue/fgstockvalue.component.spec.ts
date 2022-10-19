import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgstockvalueComponent } from './fgstockvalue.component';

describe('FgstockvalueComponent', () => {
  let component: FgstockvalueComponent;
  let fixture: ComponentFixture<FgstockvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FgstockvalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgstockvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
