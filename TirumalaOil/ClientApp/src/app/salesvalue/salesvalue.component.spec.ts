import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesvalueComponent } from './salesvalue.component';

describe('SalesvalueComponent', () => {
  let component: SalesvalueComponent;
  let fixture: ComponentFixture<SalesvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesvalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
