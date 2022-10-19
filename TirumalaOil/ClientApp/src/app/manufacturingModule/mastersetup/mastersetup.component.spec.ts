import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersetupComponent } from './mastersetup.component';

describe('MastersetupComponent', () => {
  let component: MastersetupComponent;
  let fixture: ComponentFixture<MastersetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastersetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastersetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
