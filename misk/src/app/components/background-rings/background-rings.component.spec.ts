import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundRingsComponent } from './background-rings.component';

describe('BackgroundRingsComponent', () => {
  let component: BackgroundRingsComponent;
  let fixture: ComponentFixture<BackgroundRingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundRingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
