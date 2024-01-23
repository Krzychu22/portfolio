import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleReduxComponent } from './sample-redux.component';

describe('SampleReduxComponent', () => {
  let component: SampleReduxComponent;
  let fixture: ComponentFixture<SampleReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleReduxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
