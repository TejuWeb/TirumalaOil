import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgstockrateComponent } from './fgstockrate.component';

describe('FgstockrateComponent', () => {
  let component: FgstockrateComponent;
  let fixture: ComponentFixture<FgstockrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FgstockrateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgstockrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
