import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrackButtonComponent } from './crack-button.component';

describe('CrackButtonComponent', () => {
  let component: CrackButtonComponent;
  let fixture: ComponentFixture<CrackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrackButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
