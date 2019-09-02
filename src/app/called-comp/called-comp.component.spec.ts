import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalledCompComponent } from './called-comp.component';

describe('CalledCompComponent', () => {
  let component: CalledCompComponent;
  let fixture: ComponentFixture<CalledCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalledCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalledCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
