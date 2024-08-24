import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalOptionsComponent } from './cal-options.component';

describe('CalOptionsComponent', () => {
  let component: CalOptionsComponent;
  let fixture: ComponentFixture<CalOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
