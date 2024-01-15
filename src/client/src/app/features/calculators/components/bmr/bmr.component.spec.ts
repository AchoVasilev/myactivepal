import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { BmrComponent } from './bmr.component';

describe('BmrComponent', () => {
  let component: BmrComponent;
  let fixture: ComponentFixture<BmrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
