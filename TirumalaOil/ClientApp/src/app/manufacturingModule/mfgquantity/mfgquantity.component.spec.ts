import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfgquantityComponent } from './mfgquantity.component';

describe('MfgquantityComponent', () => {
  let component: MfgquantityComponent;
  let fixture: ComponentFixture<MfgquantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfgquantityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfgquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
