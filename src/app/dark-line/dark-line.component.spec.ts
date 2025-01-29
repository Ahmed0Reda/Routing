import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkLineComponent } from './dark-line.component';

describe('DarkLineComponent', () => {
  let component: DarkLineComponent;
  let fixture: ComponentFixture<DarkLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
