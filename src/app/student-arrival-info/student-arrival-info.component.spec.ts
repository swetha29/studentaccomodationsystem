import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentArrivalInfoComponent } from './student-arrival-info.component';

describe('StudentArrivalInfoComponent', () => {
  let component: StudentArrivalInfoComponent;
  let fixture: ComponentFixture<StudentArrivalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentArrivalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentArrivalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
