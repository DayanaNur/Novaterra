import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoScoreComponent } from './eco-score.component';

describe('EcoScoreComponent', () => {
  let component: EcoScoreComponent;
  let fixture: ComponentFixture<EcoScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcoScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
