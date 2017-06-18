import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCoordinatorProfileComponent } from './student-coordinator-profile.component';

describe('StudentCoordinatorProfileComponent', () => {
  let component: StudentCoordinatorProfileComponent;
  let fixture: ComponentFixture<StudentCoordinatorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCoordinatorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCoordinatorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
