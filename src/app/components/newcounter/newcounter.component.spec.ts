import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcounterComponent } from './newcounter.component';

describe('NewcounterComponent', () => {
  let component: NewcounterComponent;
  let fixture: ComponentFixture<NewcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewcounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
