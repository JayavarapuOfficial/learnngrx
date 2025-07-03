import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcomponentComponent } from './customcomponent.component';

describe('CustomcomponentComponent', () => {
  let component: CustomcomponentComponent;
  let fixture: ComponentFixture<CustomcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
